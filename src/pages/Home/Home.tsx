import React from 'react'
import { Link } from 'react-router-dom'
import chair from "../../slike/chair.png"
import chairy from "../../slike/chairy.png"
import sofa from "../../slike/sofa.png"
import "./home.css"


function Home() {
  return (
    <main className="home-main">
      <div className="photo-main">
        <div className="box-container">
          <div className="box">

          </div>
          <div className="home-image-conteiner">
            <img className="image one" src={chair} alt="blue chair" />
            <img className="image two" src={chairy} alt="yellow chair" />
            <img className="image three" src={sofa} alt="sofa" />
          </div>
        </div>
      </div>

      <div className="home-text">
        <h1>
          Design Your
          Comfort Zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Iusto, at sed omnis corporis doloremque possimus velit!
          Repudiandae nisi odit, aperiam odio ducimus,
          obcaecati libero et quia tempora excepturi quis alias?
        </p>
         <Link to="/products">
           <button className="home-btn">SHOP NOW</button>
            </Link> 
      </div>


    </main>
  )
}

export default Home