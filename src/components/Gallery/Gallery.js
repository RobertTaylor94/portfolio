import React from 'react';
import images from '../../images.json'
import { ImageList, ImageListItem, ImageListItemBar, Container, useMediaQuery } from '@mui/material'

function Gallery(props) {
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Container sx={{ overflowY: 'scroll', width: '70vw'}}>
            <ImageList variant='woven' cols={ matches ? 2 : 1 } gap={20}>
                {images.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={process.env.PUBLIC_URL + item.img}
                            alt={item.img}
                            style={{width: '100%', height: '300px'}}
                        />
                        <ImageListItemBar
                        sx={{ backgroundColor: 'gray', color: 'white', paddingLeft: '10px', paddingTop: '5px', '& .css-dasnyc-MuiImageListItemBar-title': {
                            fontSize: '1.5em'
                        }}}
                            position='below'
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList> 
        </Container>
    );
}

export default Gallery;