import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, List, ListItemText, Typography, IconButton, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';


const Footer = () => {
    const useStyle = makeStyles({
        socialIcon: {
            color: '#F5C103',
            border: '1px solid #F5C103',
            margin: '20px 10px 30px 0',
            '&:hover': {
                backgroundColor: '#DAAC01',
                color: '#fff'
            }
        },
        footerBackground: {
            background: '#464323',
            color: '#97936A'
        }
    })

    const { socialIcon, footerBackground } = useStyle();

    return (
        <footer className={footerBackground}>
            <Container>
                <Grid container spacing={2} sx={{ m: 2 }}>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#EDD000', mb: 1 }}>About us</ListItemText>
                            <ListItemText sx={{ mr: 4 }}>We sell 100% Genuine Products. We have huge collection of Camera for Office and Home.</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#EDD000', mb: 1 }}>Our Services</ListItemText>
                            <ListItemText>Home Delivery</ListItemText>
                            <ListItemText>Product Replacement</ListItemText>
                            <ListItemText>Product Warranty</ListItemText>
                            <ListItemText>After Servicing</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#EDD000', mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>Uttara, Dhaka-1230</ListItemText>
                            <ListItemText>Bangladesh.</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Link style={{ textDecoration: 'none' }} to="/notfound">
                            <IconButton className={socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/notfound">
                            <IconButton className={socialIcon}>
                                <TwitterIcon />
                            </IconButton>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/notfound">
                            <IconButton className={socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                        </Link>
                        <Typography>Contact Us :</Typography>
                        <Link style={{ textDecoration: 'none' }} to="/notfound">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#DAAC01',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#F5C103 ',
                                        color: '#000',
                                    },
                                }}>+8801799099990</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', p: 2 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;