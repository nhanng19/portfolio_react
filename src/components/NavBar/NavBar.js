import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: #000000;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: center;
  position: fixed;
  text-align: center;
  z-index: 9999;
`;

const Navbar = () => {
  return (
    <Nav data-aos="fade-down">
      <Burger />
    </Nav>
  );
};

export default Navbar;
