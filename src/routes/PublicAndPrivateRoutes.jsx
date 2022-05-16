import React from "react";
import { Navigate } from "react-router-dom";


export const PublicRoutes =({isAuth, children})=> {
    return (!isAuth ? children : <Navigate to ="/"/>);
}

export const PrivateRoutes = ({isAuth, children})=>{
    return (isAuth ? children : <Navigate to ="/entry"/>)
}