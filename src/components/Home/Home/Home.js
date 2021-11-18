import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../../Dashboard/Review/Reviews/Reviews';
import ProductsBanner from '../ProductsBanner/ProductsBanner';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect((() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }), [])

    return (
        <>
            <Navigation />
            <Banner />
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(booking => <Product
                            key={booking.id}
                            booking={booking}
                        ></Product>)
                    }
                </Grid>
            </Container>
            <ProductsBanner />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;