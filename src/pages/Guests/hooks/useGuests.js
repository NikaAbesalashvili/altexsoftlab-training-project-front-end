import { useState, useEffect } from "react";
import { fetchGuests, acceptBooking, declineBooking } from '../../../api';

export const useGuests = () => {

    const [guests, setGuests] = useState([]);

    useEffect(() => {
        loadGuests();
    }, [])

    const loadGuests = async () => {
        const { userId } = JSON.parse(localStorage.getItem('travel-agency-user'));

        const response = await fetchGuests(userId);
        const { data } = response;
        
        setGuests(data)
    };

    const handleGuestAccept = async (guestUserId, hostUserId) => {
        await acceptBooking(guestUserId, hostUserId);
        console.log('ACCEPTED');
    };

    const handleGuestDecline = async (guestUserId, hostUserId) => {
        await declineBooking(guestUserId, hostUserId);
        console.log('DECLINED');
    }

    return {
        guests,
        handleGuestAccept,
        handleGuestDecline,
    };

};
