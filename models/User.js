import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true },
  role: { type: String, required: true, enum: ['student', 'staff', 'admin'] },
  userId: { type: String, required: true, trim: true, uppercase: true, minlength: 4, maxlength: 20 },
  passwordHash: { type: String, required: true, select: false }
}, { timestamps: true });

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ role: 1, userId: 1 }, { unique: true });

export default mongoose.model('User', userSchema);
