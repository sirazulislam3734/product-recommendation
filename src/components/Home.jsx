import React from 'react';
import Carousel from './Carousel';
import ExtraSection1 from './ExtraSection1';
import ProductSection from './ProductSection';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <ExtraSection1></ExtraSection1>
            <Carousel></Carousel>
            <ProductSection data={data}></ProductSection>
        </div>
    );
};

export default Home;