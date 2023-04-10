import React from "react";
import styled from "styled-components";
import facebook from "./imagenes/facebook.png";
import twitter from "./imagenes/gorjeo.png";
import instagram from "./imagenes/instagram.png";
import tiktok from "./imagenes/tik-tok.png";
import google from "./imagenes/social.png";

const Iconos = styled.section`
height : 15px;
widht : 10px;


`




function Redes() {
    return (
      <div className="App">
        <div className="redes">
          <Iconos className="estilo-redes">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={tiktok} alt="" />
            <img src={google} alt="" />

          
            
           







          </Iconos>


        </div>
        
      </div>
    );
  }
  
  export default Redes;