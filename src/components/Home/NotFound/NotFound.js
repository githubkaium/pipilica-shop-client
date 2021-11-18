import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#F8D250', height: '100vh' }}>
            <img style={{ width: '100vw', height: '92vh' }} src="https://i.ibb.co/9Hm6dYd/404-Error-3.jpg" alt="" />
            <Link style={{ textDecoration: 'none' }} to="/">
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#97936A',
                        border: '1px solid #F1C83B',
                        color: '#F1C83B',
                        '&:hover': {
                            backgroundColor: '#F1C83B',
                            color: '#97936A',
                        },
                    }}
                >
                    Home
                </Button>
            </Link>
        </div >
    );
};

export default NotFound;