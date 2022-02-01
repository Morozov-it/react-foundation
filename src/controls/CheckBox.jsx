import React from 'react';
//импорт стилевых компонент
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox as MuiCheckBox } from '@mui/material';


export default function CheckBox(props) {
    const { name, label, value, onChange } = props;

    const converToEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControlLabel
            control={
                <MuiCheckBox
                    color='primary'
                    name={name}
                    checked={value}
                    onChange={(e)=>onChange(converToEventParam(name, e.target.checked))} />} 
            label={label}
        />
    )
};
