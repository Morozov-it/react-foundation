import React from 'react';
//импорт стилевых компонент
import Radio from '@mui/material/Radio';
import { RadioGroup as MuiRadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function RadioGroup(props) {
    const { name, label, value, onChange, items } = props;
    return (
        <FormControl sx={{ width: 1 }}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {items.map((i) =>
                    <FormControlLabel key={i.id} value={i.title} control={<Radio />} label={i.title} />
                )}
            </MuiRadioGroup>
        </FormControl>
    ) 
};
