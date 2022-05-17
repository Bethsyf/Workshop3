import "../styles/generalStyles.css";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const FooterP = () => {
  // const navigate = useNavigate()
  return (
    <>
      <footer className="container my-3">
        <ul className="nav justify-content-around">
          <li className="nav-item">
            <Link to="/" className="nav-link"><AiOutlineHome className="fs-1 text-dark" /></Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link"><AiOutlineHeart className="fs-1 text-dark" /></Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link"><AiOutlineShoppingCart className="fs-1 text-dark" /></Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link"><AiOutlineUser className="fs-1 text-dark" /></Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default FooterP;
