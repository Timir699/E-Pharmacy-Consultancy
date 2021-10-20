import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css'
import useCartProducts from '../../hooks/useCartProducts';

const Header = () => {

    // resetPass,handleResetPass not used. later future will implement reset password functionality

    // hooks
    const { user, logout, resetPass } = useAuth()
    const cartProducts = useCartProducts()
    const { cartCounter } = cartProducts



    // const handleResetPass = () => {
    //     resetPass()
    // }

    return (
        <div>
            {/* bootstrap Navbar */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
                <Container>

                    <Navbar.Brand as={Link} to="/">E-Pharmacy & Consultancy </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} className="" to="/">Services</Nav.Link>
                            <Nav.Link as={Link} className="" to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} className="" to="/shipping">Shipping</Nav.Link>


                            {/* {user?.email && < Button onClick={handleResetPass} className="my-3" variant="warning">
                                Reset Password
                            </Button>} */}
                            {user?.email && <Navbar.Text>
                                Signed in as: <a className="mx-1" href="#login">{user?.displayName}</a>
                            </Navbar.Text>}
                        </Nav>
                        <Nav>
                            <div className="cart-link">
                                <Nav.Link as={Link} to="/cart"> <AiOutlineShoppingCart className="fs-3" /> </Nav.Link>
                                <div className="cart-counter text-white">{cartCounter}</div>
                            </div>

                            <Nav.Link style={{ display: user?.email ? "none" : "block" }} as={Link} to="/login">Log in</Nav.Link>


                            {user?.email && <Button className="mx-3" variant="warning" onClick={logout}>Log Out</Button>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
}

export default Header;