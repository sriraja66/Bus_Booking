import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("user"); // "user" or "uploader"
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const data = await apiService.login({ email, password });
            
            // 1. Store the token and user info in localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            console.log("Login successful:", data.user.username);
            
            // 2. Redirect based on user type (simplified for now)
            if (userType === 'uploader') {
                navigate('/add-bus');
            } else {
                navigate('/');
            }
        } catch (err) {
            setError(err.message || "Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card" style={{ maxWidth: "400px", margin: "20px auto", padding: "30px" }}>
            <h2>{userType === "user" ? "User Login" : "Uploader Login"}</h2>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
                <button
                    onClick={() => setUserType("user")}
                    className={userType === "user" ? "search-btn" : "booking-btn"}
                    style={{ flex: 1 }}
                >
                    User
                </button>
                <button
                    onClick={() => setUserType("uploader")}
                    className={userType === "uploader" ? "search-btn" : "booking-btn"}
                    style={{ flex: 1 }}
                >
                    Uploader
                </button>
            </div>

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <form onSubmit={handleLogin}>
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

                <div className="input-group" style={{ marginBottom: "20px" }}>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="search-btn" 
                    style={{ width: "100%" }}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "14px", color: "#64748b" }}>
                    {userType === "user" ? (
                        <>
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </>
                    ) : (
                        <>
                            New Bus Uploader? <Link to="/uploader-signup">Sign Up</Link>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}

export default LoginForm;
