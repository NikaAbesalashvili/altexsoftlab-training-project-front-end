import { useState, useEffect } from "react";
import { convertImageToBase64, getApartmentData, destructureApartmentDataFromServer } from '../helpers';
import { getApartment, addApartment, updateApartment } from '../api';

export const useAddApartament = () => {

    // Apartament data state for adding apartament
    const [userApartamentData, setUserApartamentData] = useState({
        city: '',
        address: '',
        distanceToCenter: '',
        date: '',
        maxNumberOfGuests: '',
        description: '',
        imageBase64: '',
    });

    useEffect(() => {
        loadApartment();
    }, [])
    
    // State for expanding apartament section
    const [isExpanded, setIsExpanded] = useState(false);

    // Function for toggling if apartament section is expanded or not
    const toggleApartamentExpand = () => {
        setIsExpanded((prevState) => !prevState);
    };

    // Handling apartament save
    const handleApartamentDataSubmit = (event) => {
        event.preventDefault();

        saveApartament();
    };

    // Handling apartament input fields change
    const handleApartamentInputFieldChange = (event) => {
        const { name, value } = event.target;

        setUserApartamentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handing apartament image choose
    const handleApartamentImageChoose = async (event) => {

        // Extractiog choosed file
        const image = event.target.files[0];
        const imageBase64 = await convertImageToBase64(image);

        setUserApartamentData((prevData) => ({
            ...prevData,
            imageBase64: imageBase64,
        }));
    };

    // Handling apartament image delete
    const handleApartamentImageDelete = () => {
        setUserApartamentData((prevData) => ({
            ...prevData,
            imageBase64: '',
        }));
    };

    const saveApartament = async () => {

        const dataToSend = getApartmentData(userApartamentData);

        await addApartment(dataToSend);

    };

    const loadApartment = async () => {
        const { userId } = JSON.parse(localStorage.getItem('travel-agency-user'));

        const response = await  getApartment(userId);
        const { data } = response;

        if(data) {
            const serverDataForApartment = destructureApartmentDataFromServer(data);
            setUserApartamentData((prevData) => ({
                ...prevData,
                ...serverDataForApartment,
            }));
        }

    };

    return {
        userApartamentData,
        isExpanded,
        toggleApartamentExpand,
        handleApartamentDataSubmit,
        handleApartamentInputFieldChange,
        handleApartamentImageChoose,
        handleApartamentImageDelete,
    };

};
