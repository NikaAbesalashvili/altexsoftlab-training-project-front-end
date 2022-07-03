import { useState } from "react";
import { convertImageToBase64 } from '../helpers';
import { getApartment, addApartment, updateApartment } from '../api';

export const useAddApartament = () => {

    // Apartament data state for adding apartament
    const [userApartamentData, setUserApartamentData] = useState({
        city: '',
        address: '',
        distanceToCenter: '',
        date: '',
        maxNumberOfGuests: '',
        apartamentDescription: '',
        imageBase64: '',
    });
    
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
        const {
            city,
            address,
            distanceToCenter,
            date,
            maxNumberOfGuests: bedsNumber,
            apartamentDescription,
            imageBase64,
        } = userApartamentData;

        const dateSplit = date.split('-');
        const from = dateSplit[0];
        const to = dateSplit[1];

        const response = await addApartment({ city, address, distanceToCenter, bedsNumber, apartamentDescription, imageBase64, from, to });

        console.log(response);
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
