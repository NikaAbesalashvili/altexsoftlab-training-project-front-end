import Apartment from "./Apartment/Apartment";
import './Apartments.scss'

const Apartments = ({ apartments }) => {

    const { userId } = JSON.parse(localStorage.getItem('travel-agency-user'));

    return(
        <section className="apartments-section">
            {apartments.map((apartment, index) => (
                apartment.hostUserId !== userId && <Apartment apartment={apartment} key={index} />
            ))}
        </section>
    );
};

export default Apartments;
