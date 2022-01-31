import React from 'react';
//импорт стилевых компонент
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Select as MuiSelect } from '@mui/material';


export default function Select(props) {
    const { name, label, value, onChange, options } = props;
    return (
        <FormControl variant="standard" sx={{ width: 1 }}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                label={label}
                value={value}
                onChange={onChange}>
                    <MenuItem value="">None</MenuItem>
                    {options.map((i) =>
                        <MenuItem key={i.id} value={i.title}>{i.title}</MenuItem>
                    )}
            </MuiSelect>
        </FormControl>
    )
};
