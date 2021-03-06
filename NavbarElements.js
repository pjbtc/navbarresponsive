

import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc ((100vw-1000px))/2);
    z-index: 10     
    `;

export const Navlink = styled(Link)`
    color: #fff;
    display: flex;
    align-items:center;
    text-decornation: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
     &.active{
         color: #15cdfc;
     }
    `;
export const NavMenu= styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width:786px){
        display: none;
    }
    `;

