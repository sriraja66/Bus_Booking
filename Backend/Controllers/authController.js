import * as authService from '../services/authService.js';

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
    res.status(201).json({ message: "User registered successfully", user: newUser });
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
    // This will throw an error if the email/password is wrong
    const user = await authService.loginUser(email, password);
    
    // 4. Respond back to the client upon successful login
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    // Return unauthorized status if login fails
    res.status(401).json({ message: error.message });
  }
};
