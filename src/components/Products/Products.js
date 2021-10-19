import React, { useState, useEffect } from 'react';
import { Row, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import useCartProducts from '../../hooks/useCartProducts';
import useProducts from '../../hooks/useProduct';
import './Products.css'
import { CgDetailsMore } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Products = () => {
    // component states
    const [displayProducts, setDisplayProducts] = useState([])

    // hooks
    const AllProducts = useProducts()
    const cartProducts = useCartProducts()
    const { allCartProducts, setAllCartProducts, cartCounter,
        setCartCounter } = cartProducts

    // add to cart functionality
    const ProductAddToCart = (product) => {
        setCartCounter(cartCounter + 1)
        setAllCartProducts([...allCartProducts, product])
    }
    // handling side effects
    useEffect(() => {
        setDisplayProducts(AllProducts)
    }, [AllProducts])

    // Search Product Functionality
    const handleProductChange = (e) => {
        const productSearchText = e.target.value
        const matchedProducts = AllProducts?.filter(product => product.name.toLowerCase().includes(productSearchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
    }

    return (
        <div className="products">
            <Container>

                <h2 className="text-center my-5">Products</h2>

                <InputGroup className="my-5 w-75 m-auto">
                    <FormControl
                        placeholder="Search Product or Services"
                        aria-label="Search Products or Services"
                        aria-describedby="basic-addon2"
                        onChange={handleProductChange}
                    />
                </InputGroup>

                <Row>
                    {
                        displayProducts.map((product) => {
                            return (
                                <div key={product.id} className="product text-center col-lg-4 mb-5 p-2 border rounded">
                                    <img style={{ width: "200px" }} src={product.img} alt="" />
                                    <h4 className="mt-3">{product.name}</h4>
                                    <h4>${product.price}</h4>

                                    <Button as={Link} to={`/Product/${product.id}`} variant="warning"><CgDetailsMore className="mb-1" /> Details</Button>{' '}
                                    <Button onClick={() => ProductAddToCart(product)
                                    } variant="warning"><AiOutlineShoppingCart className="mb-1" /> Add to cart</Button>{' '}
                                </div>
                            )
                        })
                    }
                    <h2 className="text-center my-5">{displayProducts.length === 0 ? "Your desired Product Not Found" : ""}</h2>
                </Row>
            </Container>
        </div >
    );
};

export default Products;