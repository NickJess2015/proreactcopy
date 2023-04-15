import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  faTiktok} from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";

const H4 = styled.h4`
font-size :22px;
color: #ffffff :
text-transform:capitalize;
margin-bottom: 30px;
font-weight: 500;
position:relative;
font-family: 'Hammersmith One', sans-serif;
&:before{
  content: '';
  position:absolute;
  left:5;
  bottom: -10px;
  background-color:#e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 60px;
  }
`
const A = styled.a`
display:inline-block;
height: 55px;
width: 55px;
background-color:#ffffff;
margin-right:10px;
margin:20px 15px 15px 0;
text-align:center;
line-height:50px;
border-radius:50%;
color:#4C9255  ;
transition:all 0.0s ease;
font-size:40px;
&:hover{
  color:#bbbbbb;
  backgrund-color:#fffffff;
}
`


function Redes () {
    return (
      <div className="App">
         <div className="socialmedia">
          <H4> Sigamos Conectados</H4>
         <A href="./redes"> <FontAwesomeIcon icon={faFacebook} /></A>
         <A href="./redes"> <FontAwesomeIcon icon={faTwitter} /></A>
         <A href="./redes"> <FontAwesomeIcon icon={faInstagram} /></A>
         <A href="./redes"> <FontAwesomeIcon icon={faTiktok} /></A>   
          
          
                 
                </div>
                
                
                
        
       
        
        
      </div>
    );
  }
  
  export default Redes;
  