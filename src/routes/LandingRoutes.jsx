import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import NavbarP from '../components/NavbarP';


const LandingRoutes = () => {
    return (
        <>
        <NavbarP/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default LandingRoutes;