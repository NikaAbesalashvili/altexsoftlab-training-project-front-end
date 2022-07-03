import { useState } from "react";
import { convertImageToBase64 } from '../helpers'; 

export const useUserProfileEdit = () => {

    // state for user user data
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        photo: '',
    });

    // Saving profile changes made by user
    const handleUserProfileFormSubmit = (event) => {
        event.preventDefault();

        console.log('USER EDITED PROFILE...');
        console.log(userData);
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

    return {
        userData,
        handleUserProfileFormSubmit,
        handleUserInputChange,
        handleUserProfilePictureUpload,
        handleUserProfilePictureDelete,
    };

};
