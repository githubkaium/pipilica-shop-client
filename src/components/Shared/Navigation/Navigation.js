import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';

const Navigation = () => {
    const { user, logout, admin } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: '#FFDD03',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        }
    })

    const { navItem, navIcon } = useStyle();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#464323' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={navIcon}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', color: '#FFDD03' }}>
                        PiPiLiCa Shop
                    </Typography>
                    {user?.email ?
                        <Box sx={{ color: '#FFDD03' }}>
                            <NavLink className={navItem} to="/home">
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            {!admin &&
                                <NavLink className={navItem} to="/allproducts">
                                    <Button color="inherit">Explore</Button>
                                </NavLink>
                            }
                            <NavLink className={navItem} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <Button onClick={logout} color="inherit">Logout</Button>
                        </Box>
                        :
                        <NavLink className={navItem} to="/login">
                            <Button color="inherit">Login</Button>
                        </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;