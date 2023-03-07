import React from 'react';
import { Skeleton, Box } from '@mui/material';
import './home.css';
// import banner from '/images/banner.jpeg';

function Home() {
    return (
        <Box component='img' src={process.env.PUBLIC_URL + '/images/banner.jpeg'} sx={{ height: '60vh', objectFit: 'cover', width: '100vw', overflow: 'hidden' }}>
        </Box>
    );
}

export default Home;