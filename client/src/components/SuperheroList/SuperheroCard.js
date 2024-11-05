import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardMedia,
    Typography,
    Box,
    Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    superheroCard: {
        margin: theme.spacing(2),
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 30px rgba(0, 0, 0, 0.2)',
        },
    },
    cardMedia: {
        height: 200,
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
    },
    cardContent: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const SuperheroCard = ({ hero }) => {
    const classes = useStyles();

    return (
        <Card className={classes.superheroCard}>
            <CardMedia
                component="img"
                image={`http://localhost:4000/${hero.images[0]}`}
                alt={hero.nickname}
                className={classes.cardMedia}
            />

            <Box className={classes.cardContent}>
                <Typography variant="h6" align="center" gutterBottom>
                    {hero.nickname}
                </Typography>
                
                <Link to={`/superhero/${hero.id}`}>
                    <Button variant="outlined" color="primary">
                        View Details
                    </Button>
                </Link>
            </Box>
        </Card>
    );
};

export default SuperheroCard;