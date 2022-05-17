import { Container, Card } from "react-bootstrap";
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletProductAsync, listProductAsync } from "../redux/actions/actionProduct";


const List = () => {

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState([]);
  const { products } = useSelector(store => store.productStore)
  useEffect(() => {
    dispatch(listProductAsync()); //
  }, [dispatch])
  const editar = (product) => {
    setModal(true)
    setDatos(product)
}


  return (
    <>
      <Container className="container">
        <div className="row">
        <div className="col">
          {products.map((item, i) => (
            <div key={item.id + i} style={{ marginLeft: "2%" }}>
              <a href="#home" id={item.id}>
                <Card style={{ textAlign: "center" }}>                  
                  <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>
                      <img src={item.foto} alt="foto producto"/>
                      {item.precio}
                      <div className="col-sm ">
                                    <div className="d-flex flex-column w-100 mb-3">
                                        <button type="button" className="btn btn-danger b-block m-1" onClick={() => dispatch(deletProductAsync(item.nombre))}
                                        >Borrar</button>

                                        {/* <button type="button" className="btn btn-primary b-block  m-1"
                                            onClick={() => editar(p)}
                                        >Editar</button> */}
                                        
                                        </div>
                                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            
          ))}
        </div>
        
        </div>
      </Container>
      {/* {
                modal === true ? <Edit datos={datos} setModal={setModal} /> : ''
            } */}
    </>
  );
}
export default memo(List);