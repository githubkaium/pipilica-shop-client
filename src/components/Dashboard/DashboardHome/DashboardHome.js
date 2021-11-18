import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <Grid container>
            {!admin ?
                <Typography variant='h4' sx={{ my: 8, mx: 8, color: '#8F7606' }}>THANK YOU FOR SHOPPING !</Typography>
                :
                <Typography variant='h4' sx={{ my: 8, mx: 8, color: '#8F7606' }}>WELCOME TO ADMIN PANEL</Typography>
            }

        </Grid>
    );
};

export default DashboardHome;