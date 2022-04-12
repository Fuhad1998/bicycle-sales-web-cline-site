import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Support from '../../Support/Support';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Homes = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Support></Support>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Homes;