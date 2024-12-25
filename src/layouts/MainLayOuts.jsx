import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
// import Home from '../components/Home';
import Footer from '../components/Footer';

const MainLayOuts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOuts;