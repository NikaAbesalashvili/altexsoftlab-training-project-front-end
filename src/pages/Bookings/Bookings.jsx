import { useBookings } from './hooks/useBookings';
import './Bookings.scss';

const Bookings = () => {

    const { bookings } = useBookings();

    return (
        <section className="booking-section">
            {bookings.length > 0 && (
                bookings.map((booking, index) => (
                    <div className="booking-card" key={index} >
                        <img className='apartment-photo' src={booking.apartmentImage} alt="Apartment image" />
                        <h2 className='apartment-address' >
                            {booking.city}
                        </h2>
                        <h4 className='apartment-info' >
                            {parseInt(booking.distanceToCenter) * 1000}m to center {booking.bedsNumber} beds
                        </h4>
                        <p className="description">
                            {booking?.apartmentDescription}
                        </p>
                        <div className='card-bottom' >
                            <h4 className='booking-date' >{booking.from}-{booking.to}</h4>
                            <h4
                                className={`status  ${booking.isPending ? 'pending' : booking.isAccepted ? 'accepted' : 'declined'}`}
                                
                            >
                                {booking.isPending ? 'Pending' : booking.isAccepted ? 'Accepted' : 'Declined'}
                            </h4>
                        </div>

                    </div>
                ))
            )}
        </section>
    );
};

export default Bookings;
