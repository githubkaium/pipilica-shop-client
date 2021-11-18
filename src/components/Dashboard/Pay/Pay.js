import React from 'react';
import { Typography, Box, Grid, Container } from '@mui/material';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Pay = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" style={{ color: '#92CDE3' }}>
                            Payment System <br />
                            Coming Soon...
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: '#D4C409' }}>
                            we are extremely sorry for your inconvenience
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '350px' }} src="https://i.ibb.co/7gQqtJj/404-Error-1.jpg" alt="paymentError" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Pay;