import React from "react";
import Visa from "./imagenes/como-crear-usuario-visa-home.jpg";
import Master from "./imagenes/logo-mastercard-cabecera-tw.jpg";
import Amex from "./imagenes/png-transparent-amex-card-credit-logo-logos-logos-and-brands-icon-thumbnail.png";
import Mp from "./imagenes/logo-mercadopago.jpg";
import Cab from "./imagenes/cabal.png";
import Shop from "./imagenes/shopping.png";
import Nar from "./imagenes/tarjeta naranja.png";
import Din from "./imagenes/Diners-Club-International-logo.jpg";

import styled from "styled-components";


const Img = styled.img`
 height:50px;
 width:100px;


`





function Metodo() {
    return (
      <div className="met">
        <div className="estilomet"><h2>Metodo de pago</h2></div>
        <div className="img">
          <Img src={Visa}></Img>
          <Img src={Master}></Img>
          <Img src={Amex}></Img>
          <Img src={Mp}></Img>
          <Img src={Cab}></Img>
          <Img src={Shop}></Img>
          <Img src={Nar}></Img>
          <Img src={Din}></Img>
          </div>

        
       
       
        
        
      </div>
    );
  }
  
  export default Metodo;
  