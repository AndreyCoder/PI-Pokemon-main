import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"



export default function LandingPage() {
  return (
    <div className="lp">
      <h1 className="title">Bienvenidos a poke page</h1>
      <img src="" alt="" />
      <div>
      </div>
      <Link to="/home">
        <button className="button"> INGRESAR </button>
      </Link>
    </div>

  )
}

