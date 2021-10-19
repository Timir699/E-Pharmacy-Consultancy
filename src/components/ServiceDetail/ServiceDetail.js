import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css'
const ServiceDetail = () => {
    // React-Router Hooks
    const { ServiceId } = useParams()
    // Hooks
    const AllServices = useServices()
    // find details to show in UI
    let Id = parseInt(ServiceId)
    let serviceDetail = AllServices?.find(element => {
        return element.id === Id
    })

    return (
        <div className="service-detail text-center">
            <h2 className="mt-3">Details of {serviceDetail?.name}</h2>
            <img src={serviceDetail?.img} alt="" className="w-25 my-3" />
            <p className="w-75 m-auto mb-5">{serviceDetail?.description}</p>
        </div>
    );
};

export default ServiceDetail;