import { useState, useEffect } from "react";
import { useUser } from '../context/UserContext';
import { convertImageToBase64 } from '../helpers'; 
import { getUserById, updateUserProfile } from '../api/user';

export const useUserProfileEdit = () => {

    // state for user user data
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        photo: '',
    });

    // Extracting userSave function from user context
    const { saveUser } = useUser();

    useEffect(() => {
        fetchUserFromDatabase();
    }, []);

    // Saving profile changes made by user
    const handleUserProfileFormSubmit = (event) => {
        event.preventDefault();

        console.log('USER EDITED PROFILE...');
        console.log(userData);
        updateUser();
    };

    // Handling input field changes of user profile
    const handleUserInputChange = (event) => {
        const { name, value } = event.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handling choose image for user profile
    const handleUserProfilePictureUpload = async (event) => {
        const image = event.target.files[0];
        // Covnerting image to base 64 format
        const imageBase64 = await convertImageToBase64(image);

        setUserData((prevData) => ({
            ...prevData,
            photo: imageBase64,
        }));
    };

    // Handling image delete from user profile
    const handleUserProfilePictureDelete = () => {
        setUserData((prevData) => ({
            ...prevData,
            photo: ''
        }));
    };

    const fetchUserFromDatabase = async () => {
        const { userId } = JSON.parse(localStorage.getItem('travel-agency-user'));
        const response = await getUserById(userId)
        const { data } = response
        
        if(data.photo) {
            setUserData((prevData) => ({
                ...prevData,
                photo: data.photo,
            }));
        }
    };

    const updateUser = async () => {
        const { userId } = JSON.parse(localStorage.getItem('travel-agency-user'));
        const response = await updateUserProfile(userId, userData);

        const { data } = response;
        const localStorageUser = JSON.parse(localStorage.getItem('travel-agency-user'));
        saveUser({ ...localStorageUser, username: `${data?.firstName}${data?.lastName}` });

    };

    return {
        userData,
        handleUserProfileFormSubmit,
        handleUserInputChange,
        handleUserProfilePictureUpload,
        handleUserProfilePictureDelete,
    };

};
