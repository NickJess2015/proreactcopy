import React from "react";
import fb from "./componnent/imagenes/facebook.png";
import tw from "./componnent/imagenes/gorjeo.png";
import ins from "./componnent/imagenes/instagram.png";
import tik from "./componnent/imagenes/tik-tok.png";
import goo from "./componnent/imagenes/social.png";
import styled from "styled-components";

//Section-padding
const Section = styled.div `
padding:4rem 4rem ;
`
//Fondo de color footer
const Piedepagina = styled.div`
background-color: green;

`
//Contenedor general de los links
const Links = styled.div`
display:flex;
justify-content:center;
flex-direction:row;

`
//Estilo del titulo de los links
const Linksdiv = styled.div`
display:flex;
flex-direction:column;
color:black;

`
//Estilo de etiqueta "a"
const A = styled.a`
color:rgb (175,175,179);
text-decoration:none;
`
//Tamaño de imagen de las redes solciales
const Imagen = styled.img`

width:50px;


`
//Tamaño y fuente "H4"
const Linksh4= styled.h4`
font-size: 14px;
line-height:17px;
margin-bottom:0.9rem;
`
//Estilos de los parrafos de los links
const P = styled.p`
font-size:12px;
line-height:15px;
margin:0.5rem 0 ;
cursor:pointer ;
`
//Contenedor de los derechos reserevados
const Below = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-top:0.2rem;
`
//Contenedor Terminos y condiciones
const Belowlinks = styled.div`
display:flex;
flex-direction:row;
text-align:right;

`
//Parrafos de los links de terminos y condiciones
const PL = styled.p`
font-size:13px;
line-height:15px;
margin-left:2rem;
color:violet;
font-weight:600;
`
//Salto de pagina
const Salto = styled.hr`
color:red;
width:90%;
`
//Estilo de fuente y tamaño derechos res.
const Copyright = styled.p`
font-size:13px;
line-height:15px;
color:black;
font-weight:600;

`
//Contenedor de redes sociales
const Social = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-left:75%;
align-items:center;
`

function Footer() {
    return (
      //Parrafos con los links
          <Piedepagina className = "piedepagina">
            <Section className="sb_section-padding"></Section>
            <Links className="sb_links">
              <Linksdiv className="sb_links-div">
                <Linksh4>Palabra</Linksh4>
                  <A href="./nicolas">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <Linksdiv/>
                  <Linksdiv>
                  <Linksh4>Palabra</Linksh4>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  </Linksdiv>
                  <Linksdiv>
                  <Linksh4>Palabra</Linksh4>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  </Linksdiv>
                  <Linksdiv>
                  <Linksh4>Palabra</Linksh4>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                  <A href="./employer">
                    <P>employer</P>
                  </A>
                 </Linksdiv>
            </Linksdiv>
          
          
          </Links>
          
          
                
            
                  
                

                <Social className="socialmedia">
                  <p><Imagen src={fb}></Imagen></p>
                  <p><Imagen src={tw}></Imagen></p>
                  <p><Imagen src={ins}></Imagen></p>
                  <p><Imagen src={tik}></Imagen></p>
                  <p><Imagen src={goo}></Imagen></p>
                </Social>
                
                
                
                <Salto></Salto>

                <Below className="sb_footer-below">
                  <div className="sb_footer-copyright"></div>
                  <Copyright>
                    @{new Date().getFullYear()}CodeInn.
                    All right reserved.
                   </Copyright>
                   </Below>
                   <Belowlinks className="sb_footer-below-links">
                    <a href="./terms"><div>
                      <PL>Terminos y Condiciones</PL>
                    </div> </a>
                    <a href="./terms"><div>
                      <PL>Privacy</PL>
                    </div> </a>
                    <a href="./terms"><div>
                      <PL>Security</PL>
                    </div> </a>
                    
                 </Belowlinks>

         </Piedepagina>
         );
  } 
  export default Footer ;