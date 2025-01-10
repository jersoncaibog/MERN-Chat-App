import User from "../models/user.model.js"
import mongoose from "mongoose"

export const createUser = async (req, res) => {
    const { username, firstName, lastName, password } = req.body

    if ( !username || !firstName || !lastName || !password ) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newUser = new User(username, firstName, lastName, password);

    try {
        await newUser.save();
        console.log('User created');
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Server error while creating user: ", error);
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

        res.status(200).json({ success: true, data: fetchedUser });
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