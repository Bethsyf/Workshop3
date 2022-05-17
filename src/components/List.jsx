import { Container } from "react-bootstrap";
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAsync } from "../redux/actions/actionProduct";
import { AiOutlineHeart } from "react-icons/ai";

const List = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState([]);
  const { products } = useSelector(store => store.productStore)
  useEffect(() => {
    dispatch(listProductAsync()); //
  }, [dispatch])
  return (
    <>
      <Container className="container">
        <div className="row row-cols-2 my-4">
          {products.map((item, i) => (
            <div className="col mb-3">
              <card key={item.id + i}>
                <div className="px-2 rounded" style={{
                  "height": "15em",
                  "backgroundImage": `url('https://res.cloudinary.com/dvovmo7yu/image/upload/v1652798771/workshop-sprint3/Mask_group_s2vpf6.png')`,
                  "backgroundSize": "cover",
                  "backgroundRepeat": "no-repeat",
                  "backgroundPosition": "center"
                }}>
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn">
                      <AiOutlineHeart className="text-dark fs-2" />
                    </button>
                  </div>
                  <img className="" src={item.foto} alt="Foto producto" style={{
                    "width": "100%",
                    "height": "13em"
                  }} />
                </div>
                {/* <a href="#home" id={item.id}> */}
                <div className="card-body">
                  <h1 className="text-muted fs-4">{item.nombre}</h1>
                  <span>$ {item.precio}</span>
                </div>
                {/* </a> */}
              </card>
            </div>
          ))}
        </div>
        
      </Container>      
    </>
  );
}

export default memo(List);
