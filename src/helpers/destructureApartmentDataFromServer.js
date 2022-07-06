export const destructureApartmentDataFromServer = (apartmentData) => {

    const {
        address,
        bedsNumber: maxNumberOfGuests,
        city,
        description,
        distanceToCenter,
        from,
        to,
        imageBase64
    } = apartmentData;

    const date = `${from}-${to}`

    return {
        address,
        maxNumberOfGuests,
        city,
        description,
        distanceToCenter,
        imageBase64,
        date,
    };

};
