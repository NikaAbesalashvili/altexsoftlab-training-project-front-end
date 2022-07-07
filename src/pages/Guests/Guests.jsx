import { Button } from '../../components';
import { useGuests } from './hooks/useGuests';
import './Guests.scss';
import userIcon from '../../images/profile-avatar.png'

const Guests = () => {

    const {
        guests,
        handleGuestAccept,
        handleGuestDecline,
    } = useGuests();

    return (
        <section className="guests-section">
            {guests.length > 0 && (
                guests.map((guest, index) => (
                    <div className='guest-box' key={index} >
                        <img className='guest-image' src={guest.userPhoto ? guest.userPhoto : userIcon} alt='user-image' />
                        <div className="card-top">
                            <h2 className="user-fullname">{guest.firstName} {guest.lastName}</h2>
                            <p className="user-description">{guest?.description}</p>
                        </div>
                        <div className="date-buttons">
                            <h4 className='date' >{guest.from}-{guest.to}</h4>
                            <div className="buttons">
                                <Button
                                    classN='button'
                                    buttonType='button'
                                    handleClick={() => handleGuestAccept(guest.guestUserId, guest.hostUserId)}
                                    buttonText='Accept'
                                />
                                <Button
                                    classN='button'
                                    buttonType='button'
                                    isShadowButton={true}
                                    handleClick={() => handleGuestDecline(guest.guestUserId, guest.hostUserId)}
                                    buttonText='Decline'
                                />
                            </div>
                        </div>
                    </div>
                ))
            )}
        </section>
    );
};

export default Guests;
