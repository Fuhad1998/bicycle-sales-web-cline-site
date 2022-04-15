
import React, { useEffect, useState } from 'react';


import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([])

    useEffect(()=>{
        fetch("https://hidden-refuge-86930.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setManageAllOrders(data))
    }, [])

    
    return (
            <div className='m-5'>
                <ManageAllOrder
                manageAllOrders={manageAllOrders}
                ></ManageAllOrder>
            </div>



    );
};

export default ManageAllOrders;