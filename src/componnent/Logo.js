import React from "react";
import Vegan from "./imagenes/IMG_8962.JPG";
import styled from "styled-components";
/*Estilo del logo */
const Img = styled.img`
height:250px   ;
width:  250px  ;
display:inline-block;
background-color:#ffffff;
margin-right:5px;
margin:20px 50px 70px 0;
text-align:center;
line-height:50px;
border-radius:100%;
color:#4C9255  ;
transition:all 0.5s ease;
font-size:40px;
&:hover{
  color:#bbbbbb;
  backgrund-color:#bbbbbb;
`
function Logo() {
    return (
      <div className="App">
        <div className="Logo">
        <Img src={Vegan}></Img> 
        </div>
        
      </div>
    );
  }
  
  export default Logo;
  