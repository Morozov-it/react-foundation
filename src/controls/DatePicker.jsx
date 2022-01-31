import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';


export default function DatePicker(props) {
    const { name, label, value, onChange } = props;

    const converToEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiDatePicker 
                name={name}
                value={value}
                onChange={(date)=>onChange(converToEventParam(name, date))}
                label={label}
                //openTo="day"
                //views={['day', 'month', 'year']}
                renderInput={(params) =>
                    <TextField sx={{ width: 1, mt: 1 }}
                    {...params} />}
            />
        </LocalizationProvider>
    ) 
};
