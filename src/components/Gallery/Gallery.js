import React from 'react';
import images from './images.json'
import { Box, ImageList, ImageListItem } from '@mui/material'

function Gallery() {
    return (
        <Box sx={{ overflowY: 'scroll', width: '100%', height: '100%', justifyContent: 'center', display: 'flex'}}>
            <ImageList variant='masonry' cols={3} gap={8} sx={{ }}>
                {images.map((item) => (
                    <ImageListItem key={item.img}>
                        <img 
                            src={item.img}
                            alt={item.title} 
                        />
                    </ImageListItem>
                ))}
            </ImageList> 
        </Box>
    );
}

export default Gallery;