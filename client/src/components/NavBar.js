import React, {useState, useContext} from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBBtn} from "mdbreact";

import {AuthContext} from "../context/auth";

function NavBar() {
    const {user, logout} = useContext(AuthContext);
    const pathName = window.location.pathname;
    const path = pathName === '/' ? 'home' : pathName.substr(1);
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (name) => setActiveItem(name);

    const [isOpen, toggleMenu] = useState(false);

    function toggleCollapse() {
        toggleMenu(!isOpen);
    }

    const navPanel = user ? (<MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">MERNQ Todo App</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
                <MDBNavItem
                    active={activeItem === 'home'}
                    onClick={() => handleItemClick('home')}
                >
                    <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBBtn
                    onClick={logout}
                    outline color="elegant"
                    size="sm"
                >
                    Logout
                </MDBBtn>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>) : (<MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">MERNQ Todo App</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
                <MDBNavItem
                    active={activeItem === 'home'}
                    onClick={() => handleItemClick('home')}
                >
                    <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBNavItem
                    active={activeItem === 'login'}
                    onClick={() => handleItemClick('login')}
                >
                    <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                    active={activeItem === 'register'}
                    onClick={() => handleItemClick('register')}
                >
                    <MDBNavLink to="/register">Register</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>);
    return navPanel;
}

export default NavBar;