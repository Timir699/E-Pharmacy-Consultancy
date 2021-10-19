import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './OrderConfirmed.css'
const OrderConfirmed = () => {
    // react-router hooks
    const history = useHistory()

    // go to product components
    const goToProduct = () => {
        history.push("/")
    }
    return (
        <div className="text-center order-confirmed">
            <h2 className="mt-3 text-success">Order Confirmed!! Thanks for being with us.</h2>
            <Button onClick={goToProduct} style={{ display: "block" }} className="btn-warning mx-auto mt-3">Go Back to Shopping</Button>
            <img src={"https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-2644404-2206500.png"} alt="" />

        </div>
    );
};

export default OrderConfirmed;