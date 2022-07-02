import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './Navbar.scss';

const Navbar = () => {

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

    return (
        user ?
        ( 
            <nav>
                <Link to='/profile' className='username' >{user?.username}</Link>
                <div>
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
