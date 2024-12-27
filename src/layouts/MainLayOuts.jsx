import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
// import Home from '../components/Home';
import Footer from '../components/Footer';

const MainLayOuts = () => {
    return (
        <div className='dark:bg-gray-800 lg:min-h-screen'>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOuts;