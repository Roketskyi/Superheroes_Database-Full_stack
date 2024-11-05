import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Button,
    Typography,
    Grid,
    Box,
    Pagination,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SuperheroCard from './SuperheroCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorSnackbar from './ErrorSnackbar';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    button: {
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    pagination: {
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
    },
    noHeroesMessage: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: 1.4,
        fontFamily: theme.typography.fontFamily,
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '25vh',
    },
}));

const SuperheroList = () => {
    const classes = useStyles();
    const [superheroes, setSuperheroes] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSuperheroes = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:4000/api/superheroes?page=${page}`);
                setSuperheroes(response.data.data);
                setTotalPages(response.data.totalPages);
            } catch (err) {
                setError('Failed to load superheroes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchSuperheroes();
    }, [page]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container className={classes.container}>
            <Typography variant="h4" className={classes.title}>
                Superhero List
            </Typography>
            
            <Link to="/add">
                <Button variant="contained" sx={{ my: 4 }} className={classes.button}>
                    Add Superhero
                </Button>
            </Link>

            {loading ? (
                <LoadingSpinner />
            ) : superheroes.length === 0 ? (
                <Box className={classes.messageContainer}>
                    <Typography variant="h6" className={classes.noHeroesMessage}>
                        There are currently no superheroes on the site, but you can add them! 😊
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {superheroes.map((hero) => (
                        <Grid item xs={2.4} key={hero.id}>
                            <SuperheroCard hero={hero} />
                        </Grid>
                    ))}
                </Grid>
            )}

            <ErrorSnackbar error={error} onClose={() => setError('')} />

            {superheroes.length > 0 && (
                <Box className={classes.pagination}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        variant="outlined"
                    />
                </Box>
            )}
        </Container>
    );
};

export default SuperheroList;
