import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        e.target.classList.add("was-validated");
        callback();
    };

    return {
        onChange,
        onSubmit,
        values
    }
};