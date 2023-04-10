import React from "react";
import Logo from "./Logo.js"; 
import Registro from "./Registro.js";
import styled from "styled-components";




const Fondo = styled.footer `
background-color: yellow ;
font-size: 15px;
width: 100%;
height: 20%;




`




function Footer() {
    return (
      <div className="App">
        <Fondo>
            <div className ="contenedor-principal">
                
            
            <div className ="contenedor-logo">
                <Logo/>
            </div>
            <div className ="contenedor-links">
                
            </div>

            <div className =" contenedor-registro">
                <Registro/>
            </div>
            <div className ="contenedor-redes">
               
            </div>
            </div>
        </Fondo>
        </div>
        
         
    );
  }
  
  export default Footer;
