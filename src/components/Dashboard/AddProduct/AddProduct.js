import React from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully!');
                    reset();
                }
            })
    };

    return (
        <div>
            <Typography variant='h4' sx={{ my: 4 }}>Add Product</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ width: '50%', height: '40px' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br /><br />
                <textarea style={{ width: '50%', height: '50px' }} {...register("description")} placeholder="Description" /> <br /><br />
                <input style={{ width: '50%', height: '40px' }} type="number" min="1" max="99999" {...register("price")} placeholder="price" /> <br /><br />
                <input style={{ width: '50%', height: '40px' }} {...register("img")} placeholder="image url" /> <br /><br />
                <input style={{ width: '50%', height: '40px', backgroundColor: '#EDD000', fontSize: '24px' }} type="submit" />
            </form>
        </div >
    );
};

export default AddProduct;