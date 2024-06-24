import React, { useEffect } from 'react';
import { UserAuth } from '../context/UserContaxt';

const InitializeApp = () => {
    const { setUserExist, setEmail, setUserName } = UserAuth();

    useEffect(() => {
        // Check for user information in localStorage
        const storedUserExist = localStorage.getItem('userExist') === 'true';
        const storedEmail = localStorage.getItem('email');
        const storedUserName = localStorage.getItem('userName');

        if (storedUserExist && storedEmail && storedUserName) {
            setUserExist(true);
            console.log("jflkhdjfjshf")
            setEmail(storedEmail);
            setUserName(storedUserName);
        }
    }, [setUserExist, setEmail, setUserName]);

    return null;
};

export default InitializeApp;
