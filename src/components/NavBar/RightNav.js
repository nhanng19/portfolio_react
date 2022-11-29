import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  li {
    position: relative;
    padding: 5px 10px;
    cursor: pointer;
  }
  li a{
    text-decoration: none;
  }
  li:before,
  li:after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 1px;
    content: "";
    background: #fff;
    transition: all 0.3s;
  }
  li:before {
    left: 0px;
    top: 0px;
  }
  li:after {
    right: 0px;
    bottom: 0px;
  }
  li:hover:before,
  li:hover:after {
    opacity: 1;
    width: 100%;
  }

  @media (max-width: 390px) {
    flex-flow: column nowrap;
    background: linear-gradient(112.1deg, #000000 11.4%, #2d3436 70.2%);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="landing" spy={true} smooth={true} offset={0} duration={500}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="project" spy={true} smooth={true} offset={-30} duration={500}>
          PROJECTS
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          ABOUT
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          CONTACT
        </Link>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1JJQJAzv3tKF7ROPnHAwiXPI3bMV5g-0m/view?usp=sharing"
          target="__blank"
        >
          RESUME
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
