import React from 'react'
import { Container, Button } from 'react-bootstrap';
import "../styles/generalStyles.css";
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container className="contEntry">
        <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652710882/entry_ii3vpu.png" alt="logo" className="imgEntry" />
        <div className="continitgen" >
          <h1 className="contenInit">
            STYLE YOUR CLOTHES
          </h1>
          <div className="contBotonesEnt">
            <Button className="buttonsEntry" variant="outline-light" onClick={() => navigate("/login")} >Sign In</Button>
            <Button className="buttonsEntry" variant="outline-secondary" onClick={() => navigate("/register")}>Sign Up</Button>
          </div>
        </div>
      </Container>
    </>
  )
}
export default Entry;