import React from 'react';
//импорт стилевых компонент
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox as MuiCheckBox } from '@mui/material';

const styles = {
    width: 1,
    //height: 1,
    //alignItems: 'center',
    //justifyContent: 'center'
}

export default function CheckBox(props) {
    const { name, label, value, onChange } = props;

    const converToEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl sx={styles}>
            <FormControlLabel
                control={
                    <MuiCheckBox
                        color='primary'
                        name={name}
                        checked={value}
                        onChange={(e)=>onChange(converToEventParam(name, e.target.checked))} />} 
                label={label}
            />
        </FormControl>
    )
};
