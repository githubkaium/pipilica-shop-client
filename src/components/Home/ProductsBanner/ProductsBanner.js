import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProductsBanner = () => {
    return (
        <>
            <Container>
                <hr />
                <Typography sx={{ fontWeight: 600, mt: 4, mb: 2, color: '#F09800' }} variant="h5" component="div">
                    TOP 3 BEST SELLING PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 8, mb: 4 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                                image={"https://i.ibb.co/2SDd9hX/camera-12.png"}
                                alt="camera image"
                            />
                            <Typography variant="h5" component="div" sx={{ mb: 1, color: '#464323', fontWeight: 500 }}>
                                Zosie Search
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 8, mb: 1 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                                image={"https://i.ibb.co/w4ydNgz/camera-04.png"}
                                alt="camera image"
                            />
                            <Typography variant="h5" component="div" sx={{ mb: 1, color: '#464323', fontWeight: 500 }}>
                                Qsee Double
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 8, mb: 1 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                                image={"https://i.ibb.co/2nQCMSr/camera-011.png"}
                                alt="camera image"
                            />
                            <Typography variant="h5" component="div" sx={{ mb: 1, color: '#464323', fontWeight: 500 }}>
                                Yui Capsule
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ProductsBanner;