import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../containers/Login";
import Register from "../containers/Register";
import LandingRoutes from "./LandingRoutes";
import { PrivateRoutes, PublicRoutes } from "./PublicAndPrivateRoutes";
import Logo from "../components/Logo";
import "../styles/generalStyles.css";
import Entry from "../containers/Entry";

const AppRoutes = ()=> {
  const [checkIn, setCheckIn]=useState(true)
  const [isLoggedIn, setIsLoggedIn]= useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
        if(user?.uid){
          setIsLoggedIn(true)
        }
        else{
          setIsLoggedIn(false)
        }
        setCheckIn(false)
    })
}, [setIsLoggedIn, setCheckIn])

if(checkIn){
  return(
      <>
      <div className="carga">
          <Logo/>
      </div>
      </>
  )
}

  return (
    <>
      <BrowserRouter>
      
            <Routes>
            <Route path="/entry" element={
                <PublicRoutes isAuth={isLoggedIn}>
                  <Entry/>
                </PublicRoutes>
              }/>
              <Route path="/login" element={
                <PublicRoutes isAuth={isLoggedIn}>
                  <Login/>
                </PublicRoutes>
              }/>
              <Route path="/register" element={
                <PublicRoutes isAuth={isLoggedIn}>
                  <Register/>
                </PublicRoutes>
              }/>

              <Route path="/*" element={
                <PrivateRoutes isAuth={isLoggedIn}>
                  <LandingRoutes/>
                </PrivateRoutes>
              }/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

//<Route path="/*" element={<Navigate to="/" />}/>