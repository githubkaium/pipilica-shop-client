import React from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const ReviewForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank you for your Review!');
                    reset();
                }
            })
    };
    return (
        <div>
            <Typography variant='h4' sx={{ my: 2, color: '#008824' }}>Hello! {user.displayName},</Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>Thank you for Purchasing from us.</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ width: '80%', height: '40px' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" /> <br /><br />
                <textarea style={{ width: '80%', height: '150px' }} {...register("review")} placeholder="Write down your review here..." /> <br /><br />
                <input style={{ width: '80%', height: '40px' }} type="number" min="1" max="10" {...register("rating")} placeholder="Give Rating Value Between (1-10)" /> <br /><br />
                <input style={{ width: '80%', border: 'none', color: '#fff', height: '45px', backgroundColor: '#008824', fontSize: '34px', fontWeight: 600 }} type="submit" />
            </form>
        </div>
    );
};

export default ReviewForm;