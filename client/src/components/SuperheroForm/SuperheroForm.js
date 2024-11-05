import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Typography, TextField } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ImageCard from './ImageCard';
import ImageDropzone from './ImageDropzone';

const SuperheroForm = () => {
    const [formData, setFormData] = useState({
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: [],
    });
    const navigate = useNavigate();
    const { id } = useParams();

    const onDrop = useCallback((acceptedFiles) => {
        const newImages = acceptedFiles.map((file) => ({
            preview: URL.createObjectURL(file),
            file,
        }));
        setFormData((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
    }, []);

    useEffect(() => {
        if (id) {
            const fetchSuperhero = async () => {
                const response = await axios.get(`http://localhost:4000/api/superheroes/${id}`);
                setFormData({ ...response.data, superpowers: response.data.superpowers.join(', ') });
            };
            fetchSuperhero();
        }
    }, [id]);

    const moveImage = (fromIndex, toIndex) => {
        const newImages = [...formData.images];
        const [movedImage] = newImages.splice(fromIndex, 1);
        newImages.splice(toIndex, 0, movedImage);
        setFormData((prev) => ({ ...prev, images: newImages }));
    };

    const handleDeleteImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();

        Object.keys(formData).forEach((key) => {
            if (key === 'images') {
                formData.images.forEach((image) => {
                    if (image.file) { 
                        form.append('images', image.file);
                    } else {
                        form.append('existingImages', image);
                    }
                });
            } else {
                form.append(key, formData[key]);
            }
        });

        const imageOrder = formData.images.map((image) => (image.file ? image.file.name : image));
        form.append('imageOrder', JSON.stringify(imageOrder));

        const method = id ? 'put' : 'post';
        await axios[method](`http://localhost:4000/api/superheroes${id ? `/${id}` : ''}`, form);
        navigate('/');
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: 'auto' }}>
                <Typography variant="h4">{id ? 'Edit' : 'Add'} Superhero</Typography>
                <TextField
                    label="Nickname"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Real Name"
                    name="real_name"
                    value={formData.real_name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Origin Description"
                    name="origin_description"
                    value={formData.origin_description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                />
                <TextField
                    label="Superpowers (comma separated)"
                    name="superpowers"
                    value={formData.superpowers}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Catch Phrase"
                    name="catch_phrase"
                    value={formData.catch_phrase}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <ImageDropzone onDrop={onDrop} />

                <Box display="flex" flexWrap="wrap" mt={2}>
                    {formData.images.map((image, index) => (
                        <ImageCard
                            key={index}
                            image={image}
                            index={index}
                            moveImage={moveImage}
                            onDelete={handleDeleteImage}
                        />
                    ))}
                </Box>

                <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
                    Submit
                </Button>
            </form>
        </DndProvider>
    );
};

export default SuperheroForm;