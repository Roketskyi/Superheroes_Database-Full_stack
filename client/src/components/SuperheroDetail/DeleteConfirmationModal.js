import React from 'react';
import { Modal, Fade, Paper, Typography, Button, Box } from '@mui/material';

const DeleteConfirmationModal = ({ open, onClose, onDelete }) => {
    return (
        <Modal open={open} onClose={onClose} closeAfterTransition>
            <Fade in={open}>
                <Paper sx={{ padding: 4, borderRadius: 2, maxWidth: 400, mx: 'auto', mt: '20%', bgcolor: '#fff', boxShadow: 6 }}>
                    <Typography variant="h6" color="textPrimary" sx={{ mb: 2 }}>
                        Are you sure you want to delete this superhero?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="outlined" color="secondary" onClick={onClose}>Cancel</Button>
                        <Button variant="contained" color="error" onClick={onDelete} sx={{ ml: 2 }}>Delete</Button>
                    </Box>
                </Paper>
            </Fade>
        </Modal>
    );
};

export default DeleteConfirmationModal;