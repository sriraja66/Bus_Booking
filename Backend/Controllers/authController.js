import * as authService from '../services/authService.js';
import jwt from 'jsonwebtoken';

// Handle user registration
export const registerUser = async (req, res) => {
  try {
    // 1. Get user details from the request body
    const { username, email, password } = req.body;

    // 2. Make sure they provided all the required details
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please provide username, email, and password" });
    }

    // 3. Call the service to register the user
    const newUser = await authService.registerUser({ username, email, password });
    
    // 4. Respond back to the client
    res.status(201).json({ message: "User registered successfully", user: { id: newUser._id, username: newUser.username, email: newUser.email } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Handle user login
export const loginUser = async (req, res) => {
  try {
    // 1. Get login details from the request body
    const { email, password } = req.body;

    // 2. Make sure they provided both details
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    // 3. Call the service to log in the user
    const user = await authService.loginUser(email, password);
    
    // 4. Create a JWT token for the user
    // The payload contains the userId
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '7d' } // Token expires in 7 days
    );

    // 5. Respond back to the client with the token and user details
    res.status(200).json({ 
      message: "Login successful", 
      token: token,
      user: { id: user._id, username: user.username, email: user.email } 
    });
  } catch (error) {
    // Return unauthorized status if login fails
    res.status(401).json({ message: error.message });
  }
};
