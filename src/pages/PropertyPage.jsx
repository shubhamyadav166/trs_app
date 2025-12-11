import React from 'react'
import { useParams } from 'react-router-dom'
import { popularProperty } from '../../utils/properties'
const PropertyPage = () => {
    const { id } = useParams();
    const property = popularProperty.find((p) => p.id === Number(id));
    console.log(property.image);


    return (
        <div className='m-20'>
            {property && (
                <div>
                    <div className=''> <img className='lg:w-1/2' src={property.image} alt={property.name} /></div>
                    <h1 className='lg:text-4xl text-2xl mt-10 lg:mt-20'>{property.name}</h1>
                    <div>  {
                        property.contentParagraphs.map((para, i) => (
                            <p key={i} className='pt-5'>{para} </p>
                        ))
                    }</div>
                    <div className='mt-10'><h1 className='sm:text-2xl text-3xl text-slate-600'>Hightlights</h1>
                        {
                            property.highlights.map((Highlight, i) => (
                                <li key={i} className='mt-3'>{Highlight}</li>
                            ))
                        }
                    </div>
                    <div className='mt-10'> <h1 className='sm:text-2xl text-3xl text-slate-600'>Amenities</h1>
                        {

                            property.amenities.map((amenities, i) => (
                                <li key={i} className='mt-3'>{amenities}</li>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default PropertyPage
