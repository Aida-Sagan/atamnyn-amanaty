// src/components/Preloader.tsx
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Preloader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // Full screen height
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Preloader;
