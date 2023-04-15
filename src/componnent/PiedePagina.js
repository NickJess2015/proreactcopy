import React from "react";
import Redes from "./Redes";
import Links from "./Links";
import Copy from "./Copyright";
import Metodo from "./Metpag";
import styled from "styled-components";


const Fondo = styled.div`
padding: 70px 0;
background-color:#ADF288;
`
const Contenpri = styled.div`
max-width:1170px;
background-color: #ADF288;
margin:auto;
`







function Footer() {
    return (
      <footer>
      <Fondo className="App">
        <Contenpri className="contenedor-principal">
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