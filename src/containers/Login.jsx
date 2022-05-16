import React, {useState } from "react";
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

      <Container>
        
        {!usuarioValido ?
          <Container>
            <h1>Ingresa</h1>

            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="correo" onChange={handleInput} />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput} />
              </Form.Group>
              <div >
                <Button class="btn btn-primary btn-lg btn-block" type="submit" style={{ margin: "5% 0% 2.5% 0%" }}>
                  Login
                </Button>                
              </div>
              <Button className="btn btn-lg btn-danger m-3" onClick={() => dispatch(loginGoogle())}>Inicio con Google</Button>
              <Button className="btn btn-lg btn-primary " onClick={() => dispatch(loginFacebookAction())}>Inicio con Facebook</Button>
            </Form>

          </Container>

          :
          denegado()

        }


        {/* // {usuarioValido && } */}

        <Link to="/register" style={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "5% 0% 5% 0%" }}>Si no tienes una cuenta puedes registrarte</Link>
      </Container>
    </>
  );
}

export default Login;