import React from 'react';
import { Box, Card, CardContent, Grid, Rating, Typography } from '@mui/material';


const Review = ({ feedback }) => {
    const { name, review, rating } = feedback;

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mb: 1 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ mb: 1, color: '#5A7705' }}>
                            {name}
                        </Typography>
                        <Typography sx={{ color: '#96A274' }} variant="body2" color="text.secondary">
                            {review}
                        </Typography>
                        <Box sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                            <Typography component="legend">{rating} Stars</Typography>
                            <Rating name="read-only" defaultValue={2} value={rating} max={10} readOnly />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default Review;