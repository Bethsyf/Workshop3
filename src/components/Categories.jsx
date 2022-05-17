import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="categories-section">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to='/' className="nav-link text-muted px-2">All</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link text-muted px-2">Shoes</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link text-muted px-2">Shirt</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link text-muted px-2">Bags</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link text-muted px-2">Jeans</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link text-muted px-2">Hoodie</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link text-muted px-2">Trousers</Link>
        </li>
      </ul>
    </section>
  )
}

export default Categories;
