import React, { useState, useEffect } from 'react';
import { Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import useServices from '../../hooks/useServices';
import './Services.css'
import { CgDetailsMore } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Banner from './Banner/Banner';
import { Link } from 'react-router-dom';

const Services = () => {
    // component states
    const [displayServices, setDisplayServices] = useState([])
    // hooks
    const AllServices = useServices()
    const cartProducts = useCartProducts()
    const { allCartProducts, setAllCartProducts, cartCounter,
        setCartCounter } = cartProducts


    // add to cart functionality
    const ServiceAddToCart = (service) => {
        setCartCounter(cartCounter + 1)
        setAllCartProducts([...allCartProducts, service])
    }
    // handling side effects
    useEffect(() => {
        setDisplayServices(AllServices)
    }, [AllServices])
    // Search Service funcionallity
    const handleServiceChange = (e) => {
        const serviceSearchText = e.target.value
        const matchedServices = AllServices?.filter(service => service.name.toLowerCase().includes(serviceSearchText.toLowerCase()))
        setDisplayServices(matchedServices)
    }

    return (
        <div className="services">
            <Banner />
            <Container>
                <h2 className="text-center my-5">Services</h2>

                <InputGroup className="my-5 w-75 m-auto">
                    <FormControl
                        placeholder="Search Product or Services"
                        aria-label="Search Products or Services"
                        aria-describedby="basic-addon2"
                        onChange={handleServiceChange}
                    />
                </InputGroup>

                <Row>
                    {displayServices?.map((service) => {
                        return (
                            <div key={service.id} className="services text-center col-lg-4 col-md-6 col-sm-12 mb-5 p-2 border rounded">
                                <img src={service.img} alt="" />
                                <h4 className="mt-3">{service.name}</h4>
                                <h4>${service.price}</h4>

                                <Button as={Link} to={`/Service/${service.id}`} variant="warning"><CgDetailsMore className="mb-1" /> Details</Button>{' '}

                                <Button onClick={() => ServiceAddToCart(service)} variant="warning"><AiOutlineShoppingCart className="mb-1" /> Add to cart</Button>{' '}
                            </div>
                        )
                    })}
                    <h2 className="text-center mb-5">{displayServices.length === 0 ? "Your desired Service Not Found" : ""}</h2>
                </Row>
            </Container>
        </div>
    );
};

export default Services;