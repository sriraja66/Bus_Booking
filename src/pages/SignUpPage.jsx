import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link,
    Container,
} from "@mui/material";

function SignUpPage() {
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
        console.log("Password:", password);
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: "85vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 4,
                }}
            >
                <Card sx={{ width: "100%", borderRadius: 3, boxShadow: 6 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            align="center"
                            sx={{ fontWeight: "bold", color: "text.primary", mb: 3 }}
                        >
                            Create Account
                        </Typography>

                        <form onSubmit={handleSignUp}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
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
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                variant="outlined"
                                margin="normal"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                                    backgroundColor: "#28a745",
                                    "&:hover": {
                                        backgroundColor: "#218838",
                                    },
                                }}
                            >
                                Sign Up
                            </Button>
                        </form>

                        <Box sx={{ mt: 2, textAlign: "center" }}>
                            <Typography variant="body2" color="text.secondary">
                                Already have an account?{" "}
                                <Link
                                    component={RouterLink}
                                    to="/login"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default SignUpPage;

