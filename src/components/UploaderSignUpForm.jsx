import React, { useState } from "react";
import { Link } from "react-router-dom";

function UploaderSignUpForm() {
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Bus Uploader Signed Up");
        console.log("Uploader Data:", formData);
    };

    return (
        <div className="card" style={{ maxWidth: "500px", margin: "20px auto", padding: "30px" }}>
            <h2>Bus Uploader Sign Up</h2>

            <form onSubmit={handleSignUp}>
                <div className="input-group" style={{ marginBottom: "15px" }}>
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group" style={{ marginBottom: "15px" }}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter company email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group" style={{ marginBottom: "15px" }}>
                    <label>Contact Number</label>
                    <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Enter contact number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group" style={{ marginBottom: "15px" }}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group" style={{ marginBottom: "20px" }}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="search-btn" style={{ width: "100%", backgroundColor: "#3498db" }}>
                    Create Account
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

export default UploaderSignUpForm;
