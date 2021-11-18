import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress } from '@mui/material';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../../Dashboard/Review/Reviews/Reviews';
import ProductsBanner from '../ProductsBanner/ProductsBanner';
import useAuth from '../../../hooks/useAuth';

const Home = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();

    useEffect((() => {
        fetch('https://still-beyond-28920.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }), [])

    return (
        <>
            <Navigation />
            <Banner />
            {isLoading && <CircularProgress />}

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