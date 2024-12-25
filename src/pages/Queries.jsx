import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Queries = () => {
    const [queries, setQueries] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/addQueries`)
        .then(res => {
            setQueries(res.data);
        })
    }, [queries])
    return (
        <div className='lg:px-16 md:px-8 px-2'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10 md:px-5 px-2 md:my-10 my-5'>
                {queries.map(query => <ProductCard key={query._id} query={query}></ProductCard>)}
            </div>
        </div>
    );
};

export default Queries;