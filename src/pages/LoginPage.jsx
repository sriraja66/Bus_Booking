import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Tabs,
    Tab,
    Link,
    Container,
} from "@mui/material";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState(0); // 0 for user, 1 for uploader
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`${userType === 0 ? "User" : "Bus Uploader"} Logged In`);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const handleTabChange = (event, newValue) => {
        setUserType(newValue);
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 4,
                }}
            >
                <Card sx={{ width: "100%", borderRadius: 3, boxShadow: 6 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
                            <Tabs
                                value={userType}
                                onChange={handleTabChange}
                                variant="fullWidth"
                                aria-label="login tabs"
                            >
                                <Tab label="User Login" />
                                <Tab label="Bus Uploader Login" />
                            </Tabs>
                        </Box>

                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            align="center"
                            sx={{ fontWeight: "bold", color: "text.primary", mb: 3 }}
                        >
                            {userType === 0 ? "User Login" : "Uploader Login"}
                        </Typography>

                        <form onSubmit={handleLogin}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                type="submit"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    py: 1.5,
                                    fontWeight: "bold",
                                    borderRadius: 2,
                                    textTransform: "none",
                                }}
                            >
                                Login
                            </Button>
                        </form>

                        <Box sx={{ mt: 2, textAlign: "center" }}>
                            <Typography variant="body2" color="text.secondary">
                                {userType === 0 ? (
                                    <>
                                        Don't have an account?{" "}
                                        <Link
                                            component={RouterLink}
                                            to="/signup"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        New Bus Uploader?{" "}
                                        <Link
                                            component={RouterLink}
                                            to="/uploader-signup"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default LoginPage;

