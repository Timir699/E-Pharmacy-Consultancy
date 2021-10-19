import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../hooks/useProduct';
import './ProductDetail.css'


const ProductDetail = () => {
    // react-router hooks
    const { ProductId: productId } = useParams()

    // hooks
    const AllProducts = useProducts()

    // find details to show in UI
    let Id = parseInt(productId)
    let productDetail = AllProducts?.find(element => {
        console.log(element.id);
        return element.id === Id
    })

    return (
        <div className="details text-center">
            <h2 className="mt-3">Details of {productDetail?.name}</h2>
            <img src={productDetail?.img} alt="" className="w-25 my-5" />
            <p className="w-75 m-auto mb-5">{productDetail?.description}</p>
        </div>
    );
};

export default ProductDetail;