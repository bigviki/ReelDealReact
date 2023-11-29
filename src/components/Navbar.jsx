import React from 'react';
import {
  Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, LogoImg
} from "./NavbarElements";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
          <Bars />
          <NavMenu>          
            <LogoImg><img src={logo} alt="logo"/></LogoImg>
            <NavLink to="/Home" >
                Home
            </NavLink>
            <NavLink to="/Review" activeStyle>
                Review
            </NavLink>
            <NavLink to="/Profile" activeStyle>
                Profile
            </NavLink>
            <NavLink to="/Search" activeStyle>
                Search
            </NavLink>
           </NavMenu>
           
            <NavBtn>
                <NavBtnLink to="/Login">
                    Sign In
                </NavBtnLink>
            </NavBtn>
        </Nav>
      </>    
  );
};

export default Navbar