import React from 'react';
import { Outlet } from 'react-router-dom';
import CoffeeNavbar from '../shared/CoffeeNavbar';

const MainLayout = () => {
    return (
        <div>
            <CoffeeNavbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;