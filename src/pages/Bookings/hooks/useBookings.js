import { useState, useEffect } from "react"
import { fetchUserBookings } from '../../../api';

export const useBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        loadBookings();
    }, [])

    const loadBookings = async () => {
        const { userId } = JSON.parse(localStorage.getItem('travel-agency-user'));
        
        const response = await fetchUserBookings(userId);
        const { data } = response;

        setBookings(data);

        console.log(data);
    };

    return {
        bookings,
    };

};