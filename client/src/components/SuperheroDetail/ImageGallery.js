import React from 'react';
import { Box, Typography, Card, CardMedia, IconButton, Tooltip } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { styled } from '@mui/system';

const Title = styled(Typography)(({ theme }) => ({
    variant: 'h4',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1.5),
    background: 'linear-gradient(45deg, #ff4081 30%, #ff80ab 90%)',
    borderRadius: '8px',
    boxShadow: `0 4px 10px rgba(0, 0, 0, 0.3)`,
    letterSpacing: '1px',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: theme.shadows[5],
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0,
    transition: 'opacity 0.3s',
    '&:hover': {
        opacity: 1,
    },
}));

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <Box sx={{ mt: 3, mb: 3 }}>
            <Title>
                Photos
            </Title>
            <Box sx={{ display: 'flex', overflowX: 'auto', py: 1 }}>
                {images.map((img, index) => (
                    <StyledCard key={index} sx={{ width: 300, marginRight: 2 }}>
                        <ImageContainer>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={`http://localhost:4000/${img}`}
                                alt={`Image ${index + 1}`}
                                sx={{
                                    borderRadius: '15px',
                                }}
                                onClick={() => onImageClick(index)}
                            />
                            <Overlay>
                                <Tooltip title="Click to zoom in on the photo" arrow>
                                    <IconButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onImageClick(index);
                                        }}
                                        sx={{ color: 'white' }}
                                    >
                                        <ZoomInIcon fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                            </Overlay>
                        </ImageContainer>
                    </StyledCard>
                ))}
            </Box>
        </Box>
    );
};

export default ImageGallery;