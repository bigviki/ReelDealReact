import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 

export const Nav = styled.nav`
    background: rgb(143, 0, 21);
    height: 85px;
    display: flex;
    justify-content: space-between;
    // padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
 
export const NavLink = styled(Link)`
    color: #000000;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 800;
    font-size: 18px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ededed;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 30;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtnLink = styled(Link)`
    border-radius: 7px;
    background: #ededed;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: black;
    }
`;

export const LogoImg = styled.nav`
    margin-left: 24px;
    height: 100px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;
 
