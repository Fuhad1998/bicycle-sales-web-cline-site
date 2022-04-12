import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)))
    }, [])
    return (

        <div className='row bg-white p-2 '>
            <h1>Products</h1>
             {
                products.map(product =><Product
                key={product.id}
                product={product}
                ></Product>)
            }
        </div>
            
           


            
            
        
    );
};

export default Products;

