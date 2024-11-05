import React from 'react';
import { Card, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'IMAGE';

const ImageCard = ({ image, index, moveImage, onDelete }) => {
    const [, ref] = useDrag({
        type: ItemType,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveImage(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <Card ref={(node) => ref(drop(node))} sx={{ position: 'relative', width: 150, margin: 1 }}>
            <CardMedia component="img" image={image.preview || `http://localhost:4000/${image}`} alt="image" />
            <IconButton
                color="error"
                onClick={() => onDelete(index)}
                sx={{ position: 'absolute', top: 8, right: 8 }}
            >
                <DeleteIcon />
            </IconButton>
        </Card>
    );
};

export default ImageCard;