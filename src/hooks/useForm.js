import { useState, useEffect } from 'react';
import { useValidate } from './useValidate';

const initialUserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

export const useForm = () => {

    // State variables for authentication and registration form
    const [isRegister, setIsRegister] = useState(false);
    const [userData, setUserData] = useState(initialUserData);
    const [canSubmit, setCanSubmit] = useState(false);

    const { formErrors, validate } = useValidate();

    // Handling authentication for user
    const handleFormSubmit = (event) => {
        event.preventDefault();
        let dataToSend = {};
        const { email, password } = userData;
        dataToSend = {
            email,
            password
        };

        console.log(dataToSend);
    };

    // useEffect for registering user
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && canSubmit) {
            console.log(userData);
        }
    }, [formErrors])

    // Handling registration button behaviour
    const handleUserRegistration = () => {
        if(!isRegister) {
            setIsRegister(true);
            setUserData(initialUserData);
        } else {
            validate(userData)
            setCanSubmit(true);
        }
    };

    // Handling user inputs change
    const handleInputFieldChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return {
        isRegister,
        userData,
        formErrors,
        handleInputFieldChange,
        handleUserRegistration,
        handleFormSubmit,
    };

};
