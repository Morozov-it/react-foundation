import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';



//хук для работы с состоянием форм
export function useForm (initialState) {
    const [values, setValues] = React.useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
        setValues({
            ...values,
            [name]: value
        })
        // setValues((prevValue) => ({
        //     ...prevValue,
        //     [name]: value
        // }))
    }
    console.log(values)
    return {
        values,
        setValues,
        handleInputChange
    }
};


export function Form ({children, onSubmit}) {
    return (
        <Box component="form"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}>
                {children}
        </Box>
    )
};
