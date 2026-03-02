import React from "react";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import SearchBox from "../components/Search";
import Features from "../components/Features";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UploaderSignUpPage from "../pages/UploaderSignUpPage";

const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: (
                <>
                    <Header />
                    <SearchBox />
                    <Features />
                </>
            ),
        },
        {
            path: "login",
            element: <LoginPage />,
        },
        {
            path: "signup",
            element: <SignUpPage />,
        },
        {
            path: "uploader-signup",
            element: <UploaderSignUpPage />,
        },
    ],
};

export default mainRoutes;
