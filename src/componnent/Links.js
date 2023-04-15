import React from "react";
import styled from "styled-components";

const List = styled.ul`
list-style:none;
`




function Links() {
    return (
      <div className = "footer">
            <div className="contenedor">
              <div className="row">
               <div className="footer-col">
                <h4>Tienda</h4>
                  <List>
                    <li ><a href=""></a>Alacena</li >
                    <li ><a href=""></a>Bebidas</li >
                    <li><a href=""></a>Refrigerados</li>
                    </List>
                  </div>
                <div className="footer-col">
                  <h4>Nosotros</h4>
                    <List>
                    <li><a href=""></a>¿Quienes somos?</li>
                    <li><a href=""></a>¿Como funciona?</li>
                    <li><a href=""></a>Politicas de devolucion</li>
                    </List>
                  </div>
                  <div className="footer-col">
                <h4>Contacto</h4>
                  <List>
                    <li><a href=""></a>+541178889032</li>
                    <li><a href=""></a>veganfood@gmail.com</li>
                    <li><a href=""></a>Flores, Buenos Aires</li>
                    </List>
                  </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Links;
  