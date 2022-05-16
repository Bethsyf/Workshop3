import react from "react";
import "../styles/generalStyles.css";

const FooterP = () => {
  return (
    <>
      <footer class="container" style={{marginTop: "20px 0px"}}>
        <div class="row">
          <div class="col-5">
            <button class="Botones-varios"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652718870/home_yqhcbk.png" alt="home"/></button>
          </div>

          <div class="col-2">
            <button class="Botones-varios"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652718870/corazon_m08bq4.png" alt="favorite"/></button>
          </div>
          <div class="col-2">
            <button class="Botones-varios"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652718870/chat_k8ap4t.png" alt="Carrito de compras"/></button>
          </div>
          <div class="col-2">
            <button class="Botones-varios"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1652718870/user_v2vazn.png" alt="profile"/></button>
          </div>
          
        </div>
      </footer>
    </>
  )
}
export default FooterP;