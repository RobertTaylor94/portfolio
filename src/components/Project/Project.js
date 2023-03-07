import React from 'react';
import './project.css';
import '../../projects.json'
import { Card, CardMedia, CardActions, Button, CardContent, Typography, Link } from '@mui/material';

function Project() {
    return (
        <Card>
            <CardMedia sx={{  }} image="" title="" />
            <CardContent>
                <Typography gutterBottom variant="h3">App Title</Typography>
            </CardContent>
            <CardActions>
                <Link component='button' size='small' href=''>GitHub</Link>
                <Link component='button' size='small' href=''>Deployed Site</Link>
            </CardActions>
        </Card>
    );
}

export default Project;