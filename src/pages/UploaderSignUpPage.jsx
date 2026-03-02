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

function UploaderSignUpPage() {
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
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
        <Container maxWidth="sm">
            <Box
                sx={{
                    minHeight: "90vh",
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
                            Bus Uploader Sign Up
                        </Typography>

                        <form onSubmit={handleSignUp}>
                            <TextField
                                fullWidth
                                label="Company Name"
                                name="companyName"
                                variant="outlined"
                                margin="normal"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                variant="outlined"
                                margin="normal"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Contact Number"
                                name="contactNumber"
                                variant="outlined"
                                margin="normal"
                                type="tel"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                variant="outlined"
                                margin="normal"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                name="confirmPassword"
                                variant="outlined"
                                margin="normal"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
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
                                    backgroundColor: "#3498db",
                                    "&:hover": {
                                        backgroundColor: "#2980b9",
                                    },
                                }}
                            >
                                Create Account
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

export default UploaderSignUpPage;

