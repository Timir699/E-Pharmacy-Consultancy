import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import './Cart.css'
import { IoBagCheckOutline } from 'react-icons/io5';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useHistory } from 'react-router';
import './Cart.css'


const Cart = () => {

    // hooks 
    const history = useHistory()
    const carts = useCartProducts()

    const { allCartProducts, setAllCartProducts, cartCounter,
        setCartCounter } = carts

    // cart products filter
    const removeItem = (cartProduct) => {
        setCartCounter(cartCounter - 1)
        const finalCartItems = allCartProducts.filter((finalCartItem) => finalCartItem !== cartProduct)
        setAllCartProducts(finalCartItems)
    }
    // route to shipping component
    const routeToShipping = () => {
        if (allCartProducts.length > 0) {
            history.push("/Shipping")
        } else {
            alert("Add Some products or services in cart")
        }

    }
    // calculation logic
    const reducer = (previousValue, currentValue) => previousValue + currentValue

    const total = allCartProducts.map((cartProductPrice) => {
        const { price } = cartProductPrice
        return price
    })

    let totalPrice = (total.reduce(reducer, 0))
    console.log(totalPrice);

    let percentage = (totalPrice * 15) / 100
    let tax = (Math.round(percentage))

    let grandTotal = totalPrice + tax + 15

    return (
        <div className="cart">
            <Container>
                <Row>
                    <div className="col-lg-8 mb-5">
                        {allCartProducts.map((cartProduct) => {
                            return (
                                <div key={cartProduct.id} className="cart text-center my-5">
                                    <img className={{ width: "250px" }} src={cartProduct.img} alt="" />
                                    <h3>{cartProduct.name}</h3>
                                    <h3>price ${cartProduct.price}</h3>

                                    <Button onClick={() => removeItem(cartProduct)} variant="warning"><MdRemoveShoppingCart className="mb-1" />Remove From Cart</Button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="summary col-lg-4 col-sm-12 my-5">
                        <h2>Order Summary</h2>
                        <p>Quantity : {allCartProducts.length}</p>
                        <p>Total : ${totalPrice}</p>
                        <p>Shipping : $15</p>
                        <p>Tax (15%) : ${tax}</p>
                        <hr />
                        <p>Grand Total : ${grandTotal}</p>
                        <Button onClick={routeToShipping} className="mx-1" variant="warning"><IoBagCheckOutline className="mb-1" /> Place Order</Button>
                    </div>
                </Row>
            </Container>

        </div >
    );
};

export default Cart;