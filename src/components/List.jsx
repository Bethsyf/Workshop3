import { Container, Card } from "react-bootstrap";
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAsync } from "../redux/actions/actionProduct";


const List = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(store => store.productStore)
  useEffect(() => {
    dispatch(listProductAsync()); //
  }, [dispatch])



  return (
    <>
      <Container>
        <div>
          {products.map((item, i) => (
            <div key={item.id + i} style={{ marginLeft: "2%" }}>
              <a href="#home" id={item.id}>
                <Card style={{ textAlign: "center" }}>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>
                      <img src={item.foto} alt="foto producto"/>
                      {item.descripcion}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
export default memo(List);