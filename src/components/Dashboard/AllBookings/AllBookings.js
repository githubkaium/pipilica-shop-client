import React, { useState, useEffect } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AllBookings = () => {
    const [bookings, setBookings] = useState([])
    const [status, setStatus] = useState("");

    const handleStatus = e => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    const handleUpdate = id => {
        fetch(`http://localhost:5000/bookings/updateBooking/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });
        alert('Order Status Updated successfully!');
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/bookings/deleteBooking/${id}`, {
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
            <h2>ALL ORDERS : {bookings.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Bookings table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Modify</TableCell>
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
                                <TableCell align="center">
                                    <select onChange={handleStatus} defaultValue={row.status} style={{ border: 'none', width: '100px', height: '30px', background: 'none' }} >
                                        <option value={"Pending"}>Pending</option>
                                        <option value={"Confirmed"}>Confirmed</option>
                                        <option value={"Delivered"}>Delivered</option>
                                    </select>
                                </TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleUpdate(row._id)} variant="contained" sx={{
                                        backgroundColor: '#fff',
                                        color: '#04CD0D',
                                        '&:hover': {
                                            backgroundColor: '#02EE0D',
                                            color: '#fff',
                                        }
                                    }}>Update</Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleDelete(row._id)} variant="contained" sx={{
                                        backgroundColor: '#DE0303',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                            color: '#DE0303',
                                        }
                                    }}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default AllBookings;