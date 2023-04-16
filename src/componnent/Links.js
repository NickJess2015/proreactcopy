import React from "react";
import styled from "styled-components";

const List = styled.ul`
list-style:none;
`
const Row =styled.div`
display:flex;
flex-wrap:wrap;
text-align: center;
margin:0 100px 0  0 ;
margin:0;
`
const Footercol = styled.div`
width: 25%;
padding: 0  15px;


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
const Listli =styled.li`

margin-bottom: 10px;
font-family: 'Hammersmith One', sans-serif;

`
const A =styled.a`
font-size: 20px ;
text-transform:capitalize ;
color: #ffffff;
text-decoration:none;
font-weight:300;
color:#406F26;
display:block;
&:hover{
  color:#bbbbbb;
  padding-left:8px;
}
`







function Links() {
    return (
      <div className = "footer">
            <div className="contenedor">
              <Row className="row">
              
                <Footercol className="footer-col">
                  <H4>Nosotros</H4>
                    <List>
                    <Listli><A href="">¿Quienes somos?</A></Listli>
                    <Listli><A href="">¿Como funciona?</A></Listli>
                    <Listli><A href="">Nuestra historia</A></Listli>
                    </List>
                  </Footercol>
                  <Footercol className="footer-col">
                <H4>Contacto</H4>
                  <List>
                    <Listli><A href="">+541178889032</A></Listli>
                    <Listli><A href="">veganfood@gmail.com</A></Listli>
                    <Listli><A href="">Flores, Buenos Aires</A></Listli>
                    </List>
                  </Footercol>
                </Row>
            </div>
      </div>
    );
  }
  
  export default Links;
  