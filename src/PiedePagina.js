import React from "react";
import fb from "./componnent/imagenes/facebook.png";
import tw from "./componnent/imagenes/gorjeo.png";
import ins from "./componnent/imagenes/instagram.png";
import tik from "./componnent/imagenes/tik-tok.png";
import goo from "./componnent/imagenes/social.png";
import styled from "styled-components";


const Section = styled.div `
padding:4rem 4rem ;
`














function Footer() {
    return (
          <div className = "piedepagina">
            <div className="sb_section-padding"></div>
            <div className="sb_links"></div>
            <div className="sb_links-div">
                <h4>Palabra</h4>
                  <a href="./nicolas">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <h4>Palabra</h4>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <h4>Palabra</h4>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <h4>Palabra</h4>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                  <a href="./employer">
                    <p>employer</p>
                  </a>
                 </div>
                 
                 <div className="socialmedia">
                  <p><img src={fb}></img></p>
                  <p><img src={tw}></img></p>
                  <p><img src={ins}></img></p>
                  <p><img src={tik}></img></p>
                  <p><img src={goo}></img></p>
                </div>
                <hr></hr>

                <div className="sb_footer-below">
                  <div className="sb_footer-copyright"></div>
                  <p>
                    @{new Date().getFullYear()}CodeInn.
                    All right reserved.
                   </p>
                   </div>
                   <div className="sb_footer-below-links">
                    <a href="./terms"><div>
                      <p>Terminos y Condiciones</p>
                    </div> </a>
                    <a href="./terms"><div>
                      <p>Privacy</p>
                    </div> </a>
                    <a href="./terms"><div>
                      <p>Security</p>
                    </div> </a>
                    
                 </div>


             </div>

        



        
        
         
        

        );
  } 
  export default Footer ;