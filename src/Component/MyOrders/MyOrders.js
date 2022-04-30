import React, { useEffect, useState } from 'react';

import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch("https://hidden-refuge-86930.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className='m-5'>
            <h1 className='pb-3'>My Orders</h1>
            <MyOrder
            orders={orders}
            ></MyOrder>
        </div>
    );
};

export default MyOrders;