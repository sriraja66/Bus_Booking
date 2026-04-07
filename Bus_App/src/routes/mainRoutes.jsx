import React from "react";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import SearchBox from "../components/Search";
import Features from "../components/Features";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UploaderSignUpPage from "../pages/UploaderSignUpPage";
import AddBus from "../pages/AddBus";
import BusList from "../pages/BusList";
import SeatBookingPage from "../pages/SeatBookingPage";
import SearchResults from "../pages/SearchResults";
import MyBookings from "../pages/MyBookings";

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
    {
      path: "add-bus",
      element: <AddBus />,
    },
    {
      path: "buses",
      element: <BusList />,
    },
    {
      path: "seat-booking",
      element: <SeatBookingPage />,
    },
    {
      path: "search-results",
      element: <SearchResults />,
    },
    {
      path: "my-bookings",
      element: <MyBookings />,
    },
  ],
};

export default mainRoutes;
