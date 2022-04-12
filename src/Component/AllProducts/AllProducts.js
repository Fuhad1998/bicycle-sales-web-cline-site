import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])
    return (
        <div className='row bg-white p-2 '>
            <h1>All Products</h1>
            {
                allProducts.map(allProduct => <AllProduct
                key={allProduct.id}
                allProduct={allProduct}
                ></AllProduct>)
            }
            
        </div>
    );
};

export default AllProducts;