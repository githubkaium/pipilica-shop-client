import * as React from 'react';
import Grid from '@mui/material/Grid';
import Bookings from '../Bookings/Bookings';

const DashboardHome = () => {
    return (
        <Grid container>
            <Grid item sx={{ mx: 4 }} xs={12} sm={12} md={12} lg={12}>
                <Bookings />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;