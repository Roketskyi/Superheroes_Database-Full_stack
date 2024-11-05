import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Paper, Button, Box } from '@mui/material';
import SuperheroHeader from './SuperheroHeader';
import SuperheroInfo from './SuperheroInfo';
import ImageGallery from './ImageGallery';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const SuperheroDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [superhero, setSuperhero] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchSuperhero = async () => {
            const response = await axios.get(`http://localhost:4000/api/superheroes/${id}`);
            setSuperhero(response.data);
        };

        fetchSuperhero();
    }, [id]);

    if (!superhero) return <div>Loading...</div>;

    const openLightbox = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/superheroes/${id}`);
            navigate('/');
        } catch (error) {
            console.error("Error deleting superhero:", error);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <SuperheroHeader />
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, boxShadow: 2, bgcolor: '#eaeff1' }}>
                <SuperheroInfo superhero={superhero} />
                <ImageGallery images={superhero.images} onImageClick={openLightbox} />

                {isOpen && (
                    <Lightbox
                        open={isOpen}
                        close={() => setIsOpen(false)}
                        slides={superhero.images.map(image => ({ src: `http://localhost:4000/${image}` }))}
                        index={currentImage}
                        onIndexChange={setCurrentImage}
                    />
                )}

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to={`/edit/${id}`}
                        sx={{ fontWeight: 600 }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => setModalOpen(true)}
                        sx={{ fontWeight: 600 }}
                    >
                        Delete
                    </Button>
                </Box>
            </Paper>

            <DeleteConfirmationModal open={modalOpen} onClose={() => setModalOpen(false)} onDelete={handleDelete} />
        </Container>
    );
};

export default SuperheroDetail;