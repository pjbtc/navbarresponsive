import React from 'react';

import './index.css';
import ReactDOM from 'react-dom';
import App from './App';



import {Nav, NavLink,NavMenu} from './NavbarElements'


 const NavbarRes=()=> {
    return (
            <div>
            <Nav>
                
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact us
                    </NavLink>
                    <NavLink to="/signup" activeStyle>
                        SignUp
                    </NavLink>
                </NavMenu>
              
              
                
            </Nav>
            </div>
            
     
    )
}

export default NavbarRes;
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

