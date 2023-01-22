import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import eoboz from '../assets/homeboz.png'

export default function CardProject() {
    return (
        <div data-aos="flip-left" className='container mx-auto px-20 py-20'>
        <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    className='w-[200px]'
                    component="img"
                    height="140"
                    image={eoboz}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
        </div>
    );
}
