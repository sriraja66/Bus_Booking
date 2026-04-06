import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signed Up");
        console.log("Name:", name);
        console.log("Email:", email);
    };

    return (
        <div className="card" style={{ maxWidth: "450px", margin: "20px auto", padding: "30px" }}>
            <h2>Create Account</h2>

            <form onSubmit={handleSignUp}>
                <div className="input-group" style={{ marginBottom: "15px" }}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group" style={{ marginBottom: "15px" }}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group" style={{ marginBottom: "15px" }}>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group" style={{ marginBottom: "20px" }}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="search-btn" style={{ width: "100%", backgroundColor: "#28a745" }}>
                    Sign Up
                </button>
            </form>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "14px", color: "#64748b" }}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUpForm;
