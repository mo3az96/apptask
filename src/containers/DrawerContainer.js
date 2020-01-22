import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Route } from 'react-router-dom';
import Edit from '../Components/Edit-Account/Edit';



const DrawerCon = () => {
    let openStore = JSON.parse(localStorage.getItem('open'))

    const [open, setOpen] = useState(openStore);

    const handleDrawerOpen = () => {
        setOpen(true);
        localStorage.setItem('open', true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        localStorage.setItem('open', false);
    };
    return (
        <>
            <Header handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} open={open} />
            <Sidebar open={open} />

        </>
    );
};

export default DrawerCon;