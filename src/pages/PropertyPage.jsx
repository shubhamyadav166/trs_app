import React from 'react'
import { useParams } from 'react-router-dom'
import { popularProperty } from '../../utils/properties'
const PropertyPage = () => {
    const { id } = useParams();
    const property = popularProperty.find((p) => p.id === Number(id));
    console.log(property.image);


    return (
        <div>
            {property && (
                <div>
                    <img src={property.image} alt={property.name} />
                    <h1>{property.name}</h1>
                </div>
            )}
        </div>
    )
}

export default PropertyPage
