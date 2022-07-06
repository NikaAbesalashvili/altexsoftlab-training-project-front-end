export const getApartmentData = (apartmentData) => {

    const {
        city,
        address,
        distanceToCenter,
        date,
        maxNumberOfGuests: bedsNumber,
        description,
        imageBase64,
    } = apartmentData;

    const { userId: hostUserId } = JSON.parse(localStorage.getItem('travel-agency-user'));

    const dateSplit = date.split('-');
    const from = dateSplit[0];
    const to = dateSplit[1];

    return {
        hostUserId,
        city,
        address,
        distanceToCenter,
        bedsNumber,
        description,
        imageBase64,
        from,
        to,
    };

};