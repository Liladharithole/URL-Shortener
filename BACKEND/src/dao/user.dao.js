import User from '../models/user.model.js';

export const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email }).select('+password');
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
};

export const findUserById = async (id) => {
  try {
    return await User.findById(id).select('-password');
  } catch (error) {
    console.error('Error finding user by ID:', error);
    throw error;
  }
};

export const updateUser = async (id, updateData) => {
  try {
    return await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select('-password');
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
