import User from '../models/User.js';

// Register a new user
export const registerUser = async (userData) => {
  try {
    // 1. Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    // 2. Create a new user (Note: For beginners, we are saving the password as-is. In real apps, passwords should be hashed!)
    const newUser = new User({
      username: userData.username,
      email: userData.email,
      password: userData.password // Taking raw password for simplicity
    });

    // 3. Save the new user to the database
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

// Login an existing user
export const loginUser = async (email, password) => {
  try {
    // 1. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // 2. Check if the password matches (comparing raw passwords for simplicity)
    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    return user; // Successfully logged in
  } catch (error) {
    throw error;
  }
};
