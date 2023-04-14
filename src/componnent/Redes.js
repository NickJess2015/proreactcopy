import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  faTiktok} from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";


function Redes () {
    return (
      <div className="App">
         <div className="socialmedia">
          <h4> Sigamos Conectados</h4>
         <a href="./redes"> <FontAwesomeIcon icon={faFacebook} /></a>
         <a href="./redes"> <FontAwesomeIcon icon={faTwitter} /></a>
         <a href="./redes"> <FontAwesomeIcon icon={faInstagram} /></a>
         <a href="./redes"> <FontAwesomeIcon icon={faTiktok} /></a>   
          
          
                 
                </div>
                
                
                
        
       
        
        
      </div>
    );
  }
  
  export default Redes;
  