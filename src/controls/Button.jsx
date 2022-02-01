import React from 'react';
import { Button as MuiButton } from '@mui/material';

export default function Button(props) {
    const {text, variant, size, color, ...other} = props
    return (
        <MuiButton
            variant={variant || 'text'}
            size={size || 'medium'}
            color={color || 'primary'}
            {...other}>
            {text}
        </MuiButton>
    )
};
