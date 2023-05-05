import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";
import  styled  from "styled-components";

const UL = styled.ul`
list-style: none;
display: flex;
justify-content : center;

`

const A = styled.a`

position: relative;
width: 60px;
height: 60px;
display: inline-block;
border-radius: 10px;
display : flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: #1CA12D;
border-color: #fff;
font-size: 2em;
border: 1px solid rgba(255,255,255,.4);
border-right: 1px solid rgba (255,255,255, .2);
border-bottom: 1px solid rgba (255,255,255, .2);
box-shadow: 0 5px 45px rgba (0,0,0, .1);
backdrop-filter : blur(2px);
transition : .5s;
overflow: hidden;
margin-left: 15px;
&:hover{
  color:#ffffff;
  background-color: #bbbbbb;
}

`
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


function Redes() {
    return (
        <section>
        <div className="App">
        <div className="App-n"></div>
        <div className="App-y"></div>
        <H4> Sigamos conectados</H4>
        <UL>
            <li><A><FontAwesomeIcon icon={faFacebook}/></A></li>
            <li><A><FontAwesomeIcon icon={faTwitter}/></A></li>
            <li><A><FontAwesomeIcon icon={faInstagram}/></A></li>
            <li><A><FontAwesomeIcon icon={faTiktok}/></A></li>
            


       </UL>
      </div>
      </section>
    )   
}
  
  export default Redes;