import Button from '../../Button/Button';
import { bookApartment } from '../../../api';
import './Apartment.scss';

const Apartment = ({ apartment }) => {

    const sendBookRequest = async (bookData) => {
        await bookApartment(bookData);
    };

    const handleBookClick = () => {
        const { userId: guestUserId } = JSON.parse(localStorage.getItem('travel-agency-user'));
        const { hostUserId, from, to } = apartment;

        const bookData = {
            guestUserId,
            hostUserId,
            from,
            to,
        };

        sendBookRequest(bookData);
    };

    return (
        <div className='apartment-card' >
            <img className='apartment-image' src={apartment.imageBase64} alt='Apartment photo' />
            <h2 className='apartment-location' >{apartment.address}, {apartment.city}</h2>
            <h4 className='distance-beds-info' >{ parseInt(apartment.distanceToCenter) * 1000}m to center  {apartment.bedsNumber} beds</h4>
            <p className='apartment-description' >{apartment.description}</p>
            <Button
                classN='button'
                buttonType='button'
                isShadowButton={false}
                buttonText='Book now'
                handleClick={handleBookClick}
            />
        </div>
    );
};

export default Apartment;
