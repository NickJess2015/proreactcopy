import React from "react";
import Img from "./imagenes/IMG_8962.JPG";
import styled from "styled-components";


const Container = styled.img`
width: 10 %;
height: 15 %;


`



function Logo() {
    return (
      
        <div className = "logo">
          < Container 
          src={Img}
          alt=""></Container>
        </div>
        
        
      
    );
  }
  
  export default Logo;