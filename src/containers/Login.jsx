import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginAsync, loginGoogle, loginFacebookAction } from "../redux/actions/actionRegister";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Login = () => {

  const dispatch = useDispatch();
  const [usuarioValido, setUsuarioValido] = useState(false);

  const [user, setUser] = useState({
    correo: "",
    password: " ",
  });


  const handleInput = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
      [target.name]: target.value
    })
    console.log(user)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(user.correo, user.password))

  }

  const navigate = useNavigate();
  const denegado = () => {
    navigate(-1)
    swal("El usuario no Existe")
  }

  return (
    <>
      <section style={{
        'height': '100vh',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
      }}>
        {!usuarioValido ?
          <Container>
            <h1 style={{ 'fontFamily': '', 'fontSize': '44px', 'fontWeight': '700' }}>Style your
              <span className='d-block'>clothes</span>
            </h1>
            <Form onSubmit={handleSubmit} className='mt-5'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Correo Electronico</Form.Label> */}
                <Form.Control className='py-2' type="email" placeholder="Email" name="correo" onChange={handleInput} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Contraseña</Form.Label> */}
                <Form.Control className='py-2' type="password" placeholder="Password" name="password" onChange={handleInput} />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100 mt-5 mb-2">
                Login
              </Button>
              <Button variant="danger" className="w-100 mb-2" onClick={() => dispatch(loginGoogle())}>Inicio con Google</Button>
              <Button variant='primary' className='w-100 mb-2' onClick={() => dispatch(loginFacebookAction())}>Inicio con Facebook</Button>
            </Form>
            <div className="d-flex justify-content-center">
              <Link to="/register">Si no tienes una cuenta puedes registrarte</Link>
            </div>
          </Container>
          :
          denegado()
        }
        {/* // {usuarioValido && } */}
      </section >
    </>
  );
}

export default Login;