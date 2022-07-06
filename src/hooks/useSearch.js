import axios from "axios";
import { useState } from "react";
import { searchApartment } from '../api';

export const useSearch = () => {
    
    const [locationData, setLocationData] = useState({
        city: '',
        date: '',
    });

    const handleInputFieldChange = (event) => {
        const { name, value } = event.target;
        setLocationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        const { city, date } = locationData
        
        const dates = date.split('-');
        const dataToSend = {
            city,
            from: dates[0],
            to: dates[1],
        }

        console.log(dataToSend);

        searchAvailableApartments(dataToSend);
    };

    const searchAvailableApartments = async (apartmentData) => {
        const response = await searchApartment(apartmentData)
        console.log(response);
    };

    return {
        locationData,
        handleInputFieldChange,
        handleSearchSubmit,
    }

}
