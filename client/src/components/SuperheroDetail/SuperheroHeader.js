import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SuperheroHeader = () => {
    return (
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <AppBar
                position="static"
                color="primary"
                sx={{
                    borderRadius: 2,
                    mb: 3,
                    boxShadow: 3,
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.9 }
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <ArrowBackIcon sx={{ color: '#fff', mr: 1 }} />
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, letterSpacing: 1, color: '#fff', flexGrow: 1 }}
                    >
                        Back to List
                    </Typography>
                </Toolbar>
            </AppBar>
        </Link>
    );
};

export default SuperheroHeader;