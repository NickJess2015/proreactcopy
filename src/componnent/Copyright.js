import React from "react";
import styled from "styled-components";

const Foobel= styled.div`
font-size :22px;
color: #ffffff :
text-transform:capitalize;
margin-bottom: 0;
font-weight: 500;
position:relative;
font-family: 'Hammersmith One', sans-serif;
`
const Dat = styled.div`
margin-left: 50%;
`
const Links = styled.div`

margin-right: 70%;


`




function Copy() {
    return (
      <div className="App">
        <Foobel className="sb_footer-below">
                  <div className="sb_footer-copyright">
                  <Dat>
                    Veganfood@{new Date().getFullYear()}|
                    Todos los derechos reservados.
                   </Dat>
                   
                   <Links className="sb_footer-below-links">
                    <a href="./terms"><div>
                      <p>Terminos y Condiciones</p>
                     </div></a>
                    
                    <a href="./terms"><div>
                      <p>Privacy</p></div>
                      </a>
                     <a href="./terms"><div>
                      <p>Security</p>
                      </div>
                     </a>
                     </Links>
                     
                    
                 
                 
                 </div>
                 
                 </Foobel>

        
       
        
        
      </div>
    );
  }
  
  export default Copy;
  