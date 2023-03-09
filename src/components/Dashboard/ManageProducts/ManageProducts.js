import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://pipilica-shop-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(
      `https://pipilica-shop-server.vercel.app/products/deleteProduct/${id}`,
      {
        method: 'DELETE',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert('Are you sure to Delete?');
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <div key={product._id} product={product}>
              <Grid item>
                <Card
                  sx={{ minWidth: 275, border: 0, boxShadow: 6, my: 4, ml: 4 }}
                >
                  <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={product?.img}
                    alt="camera image"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                      {product?.name}
                    </Typography>
                    <Typography variant="body1" component="div">
                      Price: {product?.price}
                    </Typography>
                    <Button
                      onClick={() => handleDelete(product._id)}
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: '#8F7606',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#fff',
                          color: '#8F7606',
                        },
                      }}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ManageProducts;
