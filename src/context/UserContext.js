import React, { useContext, useState } from 'react';

// Creating react context for user
const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};

// Exporting user provider
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('travel-agency-user')));

    const saveUser = (userData) => {
        localStorage.setItem('travel-agency-user', JSON.stringify(userData));
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, setUser, saveUser }} >
            {children}
        </UserContext.Provider>
    );
};
