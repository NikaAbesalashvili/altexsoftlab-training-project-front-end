import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useUser } from '../../context/UserContext';
import './Navbar.scss';

const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const navigate = useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {
        if(localStorage.getItem('travel-agency-user')) {
            setUser(JSON.parse(localStorage.getItem('travel-agency-user')));
        } else {
            navigate('/auth');
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setUser(undefined);
        navigate('/auth');
    };

    const toggleExpanded = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        user ?
        ( 
            <nav>
                <Link to='/profile' className='username' >{user?.username}</Link>
                <div className='right-side' >
                    <button
                        className='cabinet-button'
                        onClick={toggleExpanded}
                    >
                        Cabinet {isExpanded ? <BiUpArrow className='icon' /> : <BiDownArrow className='icon' />}
                    </button>
                    {isExpanded && (
                        <ul className="navbar-links">
                            <li className="list-item"><Link className='nav-link' to='/profile' >Profile</Link></li>
                            <li className="list-item"><Link className='nav-link' to='/guests' >My guests</Link></li>
                            <li className="list-item"><Link className='nav-link' to='bookings' >My Bookings</Link></li>
                        </ul>
                    )}
                    <button
                        className='logout-button'
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </div>
            </nav>
        ) : <></>
    );
};

export default Navbar;
