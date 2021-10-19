import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Shipping.css'

const Shipping = () => {
    // component State
    const [orderConfirmed, setOrderConfirmed] = useState("")
    // react-router hooks
    const history = useHistory()

    // Taking Address from user
    const handleAdressChange = (e) => {
        setOrderConfirmed(e.target.value)
        console.log(orderConfirmed);
    }

    const addressHandler = (e) => {
        e.preventDefault()
        if (orderConfirmed !== '') {
            history.push("/OrderConfirmed")

        } else {
            alert("please enter Valid Address")
        }
        setOrderConfirmed('')
    }

    return (
        <div className="shipping text-center">
            <Container>
                <h2 className="my-3"> Shipping Address</h2>
                <Form onSubmit={addressHandler}>
                    < Form.Group className="mb-3" controlId="formBasicEmail" onChange={(e) => handleAdressChange(e)}
                    >
                        <Form.Label>Your Full Address Here</Form.Label>
                        <Form.Control type="text" placeholder="Address" name="address" />
                    </Form.Group>

                    <Button className="mb-5" variant="warning" type="submit">
                        Confirm Order
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Shipping;