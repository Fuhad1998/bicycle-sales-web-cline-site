
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://hidden-refuge-86930.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)))
    }, [])
    return (

        <div className='row bg-white p-4 '>
            <h1 >Products</h1>
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

