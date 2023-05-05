import React from "react";
import "./estilos.css";
import Redes from "./Redes";
import Links from "./Links";
import Copy from "./Copyright";
import Metodo from "./Metpag";
import Logo from "./Logo";
import styled from "styled-components";

/*Body  */
const Fondo = styled.div`
padding: 70px 0;
background-color:#1CA12D  ;
`
/*Contenedor de Logo,Links,Redes */
const Contenpri = styled.div`
max-width:1400px;
background-color: #4BDC5D  ;
display:flex
`
function Footer() {
    return (
      <footer>
      <Fondo >
        <Contenpri className="respon" >
        <Logo/>
        <Links/>
        <Redes/>
        </Contenpri>
        <div className="metodo-pago">
          <Metodo/>
        </div>
        <hr></hr>
        <div className="copyright">
          <Copy/>
          </div>
          </Fondo>
        </footer>
      );
  } 
  export default Footer ;