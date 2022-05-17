import React from 'react'
import { Container, Button } from 'react-bootstrap';
import "../styles/generalStyles.css";
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate()

  return (
    <section className="">
      <div
        className="container d-flex align-items-end"
        style={{
          "backgroundImage": `url('https://res.cloudinary.com/docutv7ug/image/upload/v1652710882/entry_ii3vpu.png')`,
          "backgroundPosition": "center",
          "backgroundSize": "cover",
          "backgroundRepeat": "no-repeat",
          "height": "100vh"
        }}>
        <div className="w-100">
          <h1 className="text-uppercase text-light fs-1">
            style your<span className='d-block'>clothes</span>
          </h1>
          <div className="my-5">
            <div>
              <button className='btn btn-light w-100 mb-3' onClick={() => navigate("/login")} >Sign In</button>
            </div>
            <div>
              <button className='btn border w-100 text-white mb-3' onClick={() => navigate("/register")}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Entry;