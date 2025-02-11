import React from 'react';
import Carousel from './Carousel';
import ProductSection from './ProductSection';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ExtraSection2 from './ExtraSection2';
import ExtraSection1 from './ExtraSection1';
import ExtraSection3 from './ExtraSection3';


const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Carousel></Carousel>
            <ExtraSection1></ExtraSection1>
            <ProductSection data={data}></ProductSection>
            <ExtraSection3></ExtraSection3>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;