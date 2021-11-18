import React, { useState, useEffect } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Bookings = () => {
    const { user, token } = useAuth();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `https://still-beyond-28920.herokuapp.com/bookings?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [user.email, token])

    const handleDelete = id => {
        fetch(`https://still-beyond-28920.herokuapp.com/bookings/deleteBooking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are you sure to Delete?')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }

    return (
        <div>
            <h2>MY ORDERS : {bookings.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Bookings table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">{row.customerName}
                                </TableCell>
                                <TableCell align="center">{row.email}
                                </TableCell>
                                <TableCell align="center">{row.productName}
                                </TableCell>
                                <TableCell align="center">{row.status}
                                </TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleDelete(row._id)} variant="contained" sx={{
                                        mt: 2,
                                        backgroundColor: '#DE0303',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                            color: '#DE0303',
                                        },
                                    }}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Bookings;

