import React, { useState } from 'react';
import { Button, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import BookingModal from '../../Booking/BookingModal/BookingModal';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Product = ({ booking }) => {
    const { name, description, price, img } = booking;
    const [openBooking, setBookingOpen] = useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const { user, admin } = useAuth();

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mb: 1 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={img}
                        alt="camera image"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ mb: 1, color: '#464323', fontWeight: 500 }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body1" component="div">
                            Price: {price}
                        </Typography>
                        {!admin &&
                            <Box>
                                {user?.email ?
                                    <Button onClick={handleBookingOpen} variant="contained" sx={{
                                        mt: 2,
                                        backgroundColor: '#DAAC01',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#F5C103 ',
                                            color: '#000',
                                        },
                                    }}>BUY NOW</Button>
                                    :
                                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                                        <Button variant="contained" sx={{
                                            mt: 2,
                                            backgroundColor: '#DAAC01',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#F5C103 ',
                                                color: '#000',
                                            },
                                        }}>BUY NOW</Button>
                                    </NavLink>
                                }
                            </Box>
                        }
                    </CardContent>
                </Card>
            </Grid>
            <BookingModal
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            >
            </BookingModal>
        </>
    );
};

export default Product;