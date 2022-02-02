import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "95%",
    maxWidth: 'md',
    bgcolor: 'background.paper',
    //border: 1,
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
};

export default function MyModal({ open, handleClose, children }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    );
}