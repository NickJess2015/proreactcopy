import React from "react";
import styled from "styled-components";

/* Estilo contenedor principal footer-below */

const Foobel= styled.div`
font-size :22px;
color: #ffffff :
text-transform:capitalize;
margin-bottom: 0;
font-weight: 500;
position:relative;
font-family: 'Hammersmith One', sans-serif;
`
/*Derechos Reservados Estilo */
const Dat = styled.div`
margin-left: 50%;
`
function Copy() {
    return (
      <div className="App">
        <Foobel className="sb_footer-below">
                  <div className="sb_footer-copyright">
                  <Dat>
                    Vegan Food@{new Date().getFullYear()}|
                    Todos los derechos reservados.
                   </Dat>
                  </div>
                 
                 </Foobel>
                 </div>
    );
  }
  
  export default Copy;
  