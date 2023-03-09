import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://pipilica-shop-server.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <hr />
          <Typography
            sx={{ fontWeight: 600, mt: 4, mb: 2, color: '#7CA508 ' }}
            variant="h5"
            component="div"
          >
            CUSTOMER REVIEWS
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {reviews.map((feedback) => (
              <Review key={feedback._id} feedback={feedback}></Review>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Reviews;
