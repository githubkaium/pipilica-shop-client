import React from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios.post('https://still-beyond-28920.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully!');
                    reset();
                }
            })
    };

    return (
        <div>
            <Typography variant='h6' sx={{ my: 2, color: '#8F7606' }}>ADD PRODUCT</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ width: '50%', height: '40px' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" /> <br /><br />
                <textarea style={{ width: '50%', height: '50px' }} {...register("description")} placeholder="Product Description" /> <br /><br />
                <input style={{ width: '50%', height: '40px' }} type="number" min="1" max="99999" {...register("price")} placeholder="Product Price" /> <br /><br />
                <input style={{ width: '50%', height: '40px' }} {...register("img")} placeholder="Product Image URL" /> <br /><br />
                <input style={{ width: '50%', height: '40px', backgroundColor: '#EDD000', fontSize: '24px' }} type="submit" />
            </form>
        </div >
    );
};

export default AddProduct;