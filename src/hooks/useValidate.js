import { useState } from "react";

export const useValidate = () => {
    
    // State variables for form errors
    const [formErrors, setFormErrors] = useState({  });

    // Function for checking user input values if user typed correct values for each field
    const validate = (values) => {
        const errors = {  };
        const regex = /@gmail.com$/;

        if(!values?.firstName || !values.lastName) errors.firstLastName = 'First and last name is required';
        if(!values?.email) errors.email = 'Email is required';
        else if(!regex.test(values?.email) || values.email.replace('@gmail.com', '').length < 3) errors.email = 'Invalid email format';
        if(!values?.password || values?.password.length < 7) errors.password = 'Password must contain at least 7 simbols';

        setFormErrors(errors);

    };

    return {
        formErrors,
        validate,
    };
};
