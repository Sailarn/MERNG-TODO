import React, {useContext, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {AuthContext} from "../context/auth";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar() {
    const classes = useStyles();
    const {user, logout} = useContext(AuthContext);
    const pathName = window.location.pathname;
    const path = pathName === '/' ? 'home' : pathName.substr(1);
    const [activeItem, setActiveItem] = useState(path);
    const handleItemClick = (name) => setActiveItem(name);

    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function phoneMenuClick(item) {
        if (item === 'logout') {
            handleItemClick(item);
            handleClose();
        } else {
            logout();
            handleClose();
        }
    }

    const onSmallScreenOptions = (
        <div className="phone-menu">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu"
                        onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            {!user ?
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => phoneMenuClick('login')}
                              component={Link}
                              to="/login">Login</MenuItem>
                    <MenuItem onClick={() => phoneMenuClick('register')}
                              component={Link}
                              to="/register"
                    >Register</MenuItem>
                </Menu> : <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => phoneMenuClick('logout')}>Logout</MenuItem>
                </Menu>
            }
        </div>);
    const children = !user ? (
        <div>
            <div className="normal-btns">
                <Button
                    variant={activeItem === 'login' ? 'outlined' : 'text'}
                    onClick={() => handleItemClick('login')}
                    component={Link}
                    to="/login"
                    color="inherit">Login
                </Button>
                <Button
                    variant={activeItem === 'register' ? 'outlined' : 'text'}
                    onClick={() => handleItemClick('register')}
                    component={Link}
                    to="/register"
                    color="inherit">Register
                </Button>
            </div>
            {onSmallScreenOptions}
        </div>) : (
        <div>
            <div className="normal-btns">
                <Button
                    onClick={logout}
                    color="inherit">Logout
                </Button>
            </div>
            {onSmallScreenOptions}
        </div>);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        onClick={() => handleItemClick('home')}
                        component={Link} to="/"
                        variant="h6"
                        className={classes.title}>
                        MERNG Todo App
                    </Typography>
                    {children}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;