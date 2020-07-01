import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PropertyCard from './displayProperty';

import staticdata from './staticdata.json'

function PropertyList(){
    const [properties, setProperties] = useState(staticdata)
    console.log('here',properties)
 
    return (
        <div container spacing={24} style={{ padding: 20 }}>
            <h1
            >
            Properties:
            </h1>
            {properties.properties.map(property => (
            <PropertyCard
                key={property.id}
                name={property.name}
                address={property.address}
                city={property.city}
                state={property.state}
                zipcode={property.zip}
                id={property.id}
            />
            ))}
    
            <div className={null}>
            <Link to="/add-property">
                <div size="medium" className={null}>
                + Add New Property
                </div>
            </Link>
            </div>
        </div>
        );
}

export default PropertyList;