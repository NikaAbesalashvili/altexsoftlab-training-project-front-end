import { useState } from "react";

export const useSearch = () => {
    
    const [{ location, date }, setLocationData] = useState({
        location: '',
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

        const dates = date.split('-');
        const dataToSend = {
            location,
            from: dates[0],
            to: dates[1],
        }

        console.log('SEARCHING LOCATION...');
        console.log(dataToSend);
    };

    return {
        location,
        date,
        handleInputFieldChange,
        handleSearchSubmit,
    }

}
