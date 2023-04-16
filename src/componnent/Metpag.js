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
const Met= styled.div`
display:flex;
margin-left : 10%;


`
const Tarj=styled.div`
 margin: 10px  20px 60px 70px;
 text-align: center;
`
const H2= styled.div`
margin-right:5%;
text-align: 100px;

`





function Metodo() {
    return (
      <Met className="met">
        <H2 className="estilomet"><h2>Metodo de pago</h2></H2>
        <Tarj className="img">
          <Img src={Visa}></Img>
          <Img src={Master}></Img>
          <Img src={Amex}></Img>
          <Img src={Mp}></Img>
          <Img src={Cab}></Img>
          <Img src={Shop}></Img>
          <Img src={Nar}></Img>
          <Img src={Din}></Img>
          </Tarj>

        
       
       
        
        
      </Met>
    );
  }
  
  export default Metodo;
  