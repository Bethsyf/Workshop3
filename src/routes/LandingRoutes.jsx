import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import NavbarP from '../components/NavbarP';
import Add from '../components/Add';
import Checkout from "../containers/Checkout";
import Favorite from "../containers/Favorite";
import Profile from "../containers/Profile";



const LandingRoutes = () => {
    return (
        <>
        <NavbarP/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Add />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default LandingRoutes;