import React from 'react';
import {Link} from 'react-router-dom';
import PropertyCard from './displayProperty';

import staticdata from './staticdata.json'

function PropertyList(){
    console.log('here',staticdata.properties.map(property =>(property.name)))
 
    return (
        <div container spacing={24} style={{ padding: 20 }}>
            <h1
            className={null}
            variant="h5"
            component="h2"
            gutterBottom
            >
            Properties:
            </h1>
            {staticdata.properties.map(property => (
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