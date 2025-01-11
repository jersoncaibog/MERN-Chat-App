import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // if not new/modified

  try {
    const salt = await bcrypt.genSalt(10);  // Generate a salt (rounds = 10)
    this.password = await bcrypt.hash(this.password, salt);  // Hash the password
    next();
  } catch (error) {
    next(error) // if error, pass it to the next middleware
  }
})

const User = mongoose.model('User', userSchema);
export default User;
