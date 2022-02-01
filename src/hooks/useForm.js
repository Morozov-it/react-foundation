import React from 'react';
//импорт стилевых компонент
import Box from '@mui/material/Box';



//хук для работы с состоянием форм
export function useForm(initialState) {
    //активация состояния полей формы с начальным состоянием
    const [values, setValues] = React.useState(initialState);

    //функция для сброса всех полей
    const handleFormReset = () => {
        setValues(initialState)
    }

    //функция для контролируемых полей
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    return {
        values,
        setValues,
        handleInputChange,
        handleFormReset
    }
};


export function Form ({children, onSubmit, onReset}) {
    return (
        <Box component="form"
            autoComplete="off"
            onReset={onReset}
            onSubmit={onSubmit}>
                {children}
        </Box>
    )
};
