import React from "react";
import Redes from "./Redes";
import Links from "./Links";
import Copy from "./Copyright";
import Metodo from "./Metpag";
import styled from "styled-components";









function Footer() {
    return (
      <footer>
      <div className="App">
        <div className="contenedor-principal">
        <Links/>
        <Redes/>
        </div>
        <div className="metodo-pago">
          <Metodo/>
        </div>
        <hr></hr>
        <div className="copyright">
          <Copy/>


        </div>
          
          
          
                
            
                  
        </div>
        </footer>
      );
  } 
  export default Footer ;