import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, CircularProgress } from '@mui/material';
import Product from '../Product/Product';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch('https://pipilica-shop-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navigation />
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ my: 4 }}>
          {isLoading && <CircularProgress />}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((booking) => (
              <Product key={booking._id} booking={booking}></Product>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
