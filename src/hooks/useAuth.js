import { useState, useEffect } from 'react';
import { userRegistration, authenticateUser } from '../api/user';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useValidate } from './useValidate';

const initialUserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

export const useAuth = () => {

    // State variables for authentication and registration form
    const [isRegister, setIsRegister] = useState(false);
    const [userData, setUserData] = useState(isRegister ? initialUserData : { login: '', password: '' });
    const [canSubmit, setCanSubmit] = useState(false);

    const { formErrors, validate } = useValidate();
    const { saveUser } = useUser();
    const navigate = useNavigate();


    // useEffect for registering user
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && canSubmit) {

            register();

        }
    }, [formErrors])

    // Handling authentication for user
    const handleFormSubmit = (event) => {
        event.preventDefault();

        authenticate();

    };

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

    // Function for handling user authentication request & respnse
    const authenticate = async () => {
        const { login, password } = userData;
        const response = await authenticateUser({ login, password });

        if(response.status === 200) {
            const { token, userId } = response.data;

            saveUser({ token, username: login, userId });
            // localStorage.setItem('travel-agency-user', JSON.stringify({token, username: login}));
            navigate('/search');
        }
    };

    // Function for handling user registration requset & response
    const register = async () => {
        const response = await userRegistration({ ...userData, photo: '' });
        if(response.status === 200) {
            setIsRegister(false);
            setUserData({ login: '', password: '' });
        }
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
