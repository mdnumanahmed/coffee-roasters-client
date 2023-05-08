import React from 'react';
import useTitle from '../../hooks/useTitle';

const HomePage = () => {
    useTitle('Home')
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;