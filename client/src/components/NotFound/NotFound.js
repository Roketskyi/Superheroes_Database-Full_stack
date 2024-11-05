import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Повернення на головну сторінку
    };

    return (
        <Container 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '100vh',
                backgroundColor: '#f9f9f9',
                textAlign: 'center',
            }}
        >
            <Typography variant="h1" sx={{ fontSize: '4rem', color: '#f44336' }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Oops! The page you're looking for does not exist.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                It seems we can't find the page you're looking for.
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleGoHome}
            >
                Go to Home
            </Button>
        </Container>
    );
};

export default NotFound;
