import mongoose from 'mongoose';
import { User } from '../../types/user.type.js';

export interface UserDocument extends User, mongoose.Document {
  createdAt: Date,
  updatedAt: Date,
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [1, 'Min length for name is 1'],
    maxLength: [15, 'Max length for name is 15'],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
    required: true,
  },
  avatar: String,
  password: {
    type: String,
    minLength: [6, 'Min length for password is 6'],
    maxLength: [12, 'Max length for password is 12'],
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
