import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formValues, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({ ...formValues, [target.name]: target.value });
    };

    const resetForm = () => {
        setValues(initialState);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
    };

    return [formValues, 
            handleInputChange,
            resetForm,
            handleOnSubmit];
};
