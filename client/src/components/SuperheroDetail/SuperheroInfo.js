import React from 'react';
import { Typography, Stack, Chip, Paper } from '@mui/material';

const SuperheroInfo = ({ superhero }) => {
    return (
        <Paper sx={{ p: 3, mb: 3, borderRadius: 2, boxShadow: 2, bgcolor: '#f5f5f5' }}>
            <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                {superhero.nickname}
            </Typography>

            <Typography variant="h6" color="textSecondary" gutterBottom>
                Real Name: <span style={{ fontWeight: 600 }}>{superhero.real_name}</span>
            </Typography>

            <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label="Origin Description" color="secondary" variant="filled" />

                    <Typography variant="body1" color="textPrimary" sx={{ maxWidth: '70%' }}>
                        {superhero.origin_description}
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label="Superpowers" color="primary" variant="filled" />

                    <Typography variant="body1" color="textPrimary" sx={{ maxWidth: '70%' }}>
                        {superhero.superpowers.join(', ')}
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label="Catch Phrase" color="success" variant="filled" />

                    <Typography variant="body1" color="textPrimary" sx={{ maxWidth: '70%' }}>
                        {superhero.catch_phrase}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default SuperheroInfo;