import "../styles/generalStyles.css";
import { useNavigate } from 'react-router-dom';

const FooterP = () => {

  const navigate = useNavigate()
  return (
    <>
      <footer className="container" style={{marginTop: "20px 0px"}}>
        <div className="row">
          <div className="col-5">
            <button className="Botones-varios"><img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1652726593/wjytvkzc6kn5ktq8e7jl.png" onClick={() => navigate("/home")} alt="home"/></button>
          </div>

          <div className="col-2">
            <button className="Botones-varios"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652718870/corazon_m08bq4.png" onClick={() => navigate("/favorite")} alt="favorite"/></button>
          </div>
          <div className="col-2">
            <button className="Botones-varios"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652718870/chat_k8ap4t.png" onClick={() => navigate("/checkout")} alt="Carrito de compras"/></button>
          </div>
          <div className="col-2">
            <button className="Botones-varios"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652718870/user_v2vazn.png" onClick={() => navigate("/profile")} alt="profile"/></button>
          </div>
          
        </div>
      </footer>
    </>
  )
}
export default FooterP;