import mongoose from "mongoose";
import User from "../models/user.model.js";
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../utils/authTokenUtils.js";
import bcrypt from "bcryptjs"
 
export const createUser = async (req, res) => {
    const data = req.body

    if ( !data.username || !data.firstname || !data.lastname || !data.password  ) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        if (await User.findOne({ username: data.username })) {
            return res.status(400).json({ success: false, message: 'Username already taken' });
        }
        
        // save to database
        const newUser = new User(data);
        
        await newUser.save();
        console.log('User created');

        // create tokens
        const accessToken = createAccessToken(newUser);
        const refreshToken = createRefreshToken(newUser);

        // Set refresh token as HTTP-only cookie
        res.cookie('refreshToken', refreshToken, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict'
        });

        res.status(201).json({ success: true, message: 'User created', accessToken: accessToken, data: newUser });
    } catch (error) {
        console.error("Server error while creating user: ", error);
        res.status(500).json({ success: false, message: "server error" });
    }
}

export const loginUser = async (req, res) => {
    const data = req.body
    console.log("43: ", data);

    if (!data.username || !data.password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    try {
        
        const user = await User.findOne({ username: data.username})
        if (!user) {
            console.error("User not found");
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) {
            console.error("Incorrect password");
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }
        
        // create tokens
        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken(user);
        
        // Set refresh token as HTTP-only cookie
        res.cookie('refreshToken', refreshToken, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict' 
        });
        
        console.log(user)
        res.status(201).json({ success: true, message: 'Login successful', accessToken, data: user });

    } catch (error) {
        console.error("Server error while signing in: ", error)
        res.status(500).json({ success: false, message: "server error" });
    }
}

export const fetchUser = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid user Id" });
    }

    try {
        const fetchedUser = await User.findById(id);

        if (!fetchedUser) {
            console.error('User not found');
            return res.status(404).json({ success: false, message: "User not found" });
        }
    
        res.status(201).json({ success: true, message: 'User fetched successfully', data: fetchedUser });
    } catch (error) {
        console.error("Server error while fetching user: ", error)
        res.status(500).json({ success: false, message: "server error" });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const newUserData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid user Id" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, newUserData, { new: true });

        if (!updateUser) {
            console.error('User not found');
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        console.error("Server error while updating user: ", error)
        res.status(500).json({ success: false, message: "server error" });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid user Id" });
    }

    try {
        const deletedUser = await User.findByIdAndDelete(id)

        if (!deletedUser) {
            console.error('User not found');
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully" })
    } catch (error) {
        console.error("Server error while deleting user: ", error);
        res.status(500).json({ success: false, message: "server error" });
    }
}

export const refreshAccessToken = (req, res) => {
    const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token missing' });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const user = decoded; // Get user data
    console.log(user)
    const newAccessToken = createAccessToken(user);
    res.status(200).json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired refresh token' });
  }
};

export const logoutUser = (req, res) => {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
    });
    res.status(200).json({ success: true, message: 'Logged out successfully' });
};