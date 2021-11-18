import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import Product from '../Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <>
            <Navigation />
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 2, color: 'success.main' }} variant="h4" component="div">
                        ALL PRODUCTS
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(booking => <Product
                                key={booking._id}
                                booking={booking}
                            ></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Products;