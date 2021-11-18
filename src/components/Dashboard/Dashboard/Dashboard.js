import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { AppBar, Button, CssBaseline, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import Bookings from '../Bookings/Bookings';
import ReviewForm from '../Review/ReviewForm/ReviewForm';
import AllBookings from '../AllBookings/AllBookings';

const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />

            <Box>
                <Divider />
                <Link style={{ textDecoration: 'none', color: '#464323' }} to="/allProducts"><Button color="inherit">All Products</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', color: '#464323' }} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', color: '#464323' }} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', color: '#464323' }} to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
                <Divider />
                <Link style={{ textDecoration: 'none', color: '#464323' }} to={`${url}/review`}><Button color="inherit">Review</Button></Link>
                <Divider />
            </Box>
            {admin &&
                <Box>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#AB8E00' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#AB8E00' }} to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#AB8E00' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#AB8E00' }} to={`${url}/allOrders`}><Button color="inherit">All Orders</Button></Link>
                    <Divider />
                </Box>
            }
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#464323'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ color: '#FFDD03' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Button onClick={logout} sx={{ color: '#FFDD03', marginLeft: 'auto' }}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <Bookings />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/review`}>
                        <ReviewForm />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/allOrders`}>
                        <AllBookings />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
