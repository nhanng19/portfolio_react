import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: linear-gradient(112.1deg, #000000 11.4%, #2d3436 70.2%);
  border-bottom: 2px solid #f1f1f1;
  display: flex;

  justify-content: center;
  position: fixed;
  text-align: center;
  z-index: 9999;

`;

const Navbar = () => {
  return (
    <Nav data-aos= "fade-down">
      <Burger />
    </Nav>
  );
};

export default Navbar;
