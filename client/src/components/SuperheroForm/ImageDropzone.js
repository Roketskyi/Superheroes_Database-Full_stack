import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography } from '@mui/material';

const ImageDropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

    return (
        <div {...getRootProps({ style: { border: '2px dashed #3f51b5', padding: 20, marginTop: 20 } })}>
            <input {...getInputProps()} />

            <Typography>Drag & drop images here, or click to select files</Typography>
        </div>
    );
};

export default ImageDropzone;