import React from 'react';
import TextField from '@mui/material/TextField';

export default function Input(props) {
    const { name, label, value, onChange, ...other} = props;
    return (
        <TextField sx={{ width: 1 }}
            variant="outlined"
            label={label}
            {...other}
            name={name}
            value={value}
            onChange={onChange}
        />
    ) 
};
