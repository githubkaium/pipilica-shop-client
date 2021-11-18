import React from 'react';
import { Grid, Box } from '@mui/material';


const Banner = () => {
    return (
        <Box>
            < Grid item xs={12} md={12} lg={12} >
                <img style={{ width: '100%', height: '350px' }} src="https://i.ibb.co/hDSjBYZ/login-01.png" alt="" />
            </Grid >
        </Box>
    );
};

export default Banner;