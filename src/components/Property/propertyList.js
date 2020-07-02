import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropertyCard from './displayProperty';
import axios from 'axios';
import staticdata from './staticdata.json'

function PropertyList(){

    const [data, setData] = useState({ properties:[ ] });
    const [detele, setDetele] = useState(false);

   


    useEffect(async ()=>{
      const id = 1;
      
      const result = await axios(`https://tenantly-back.herokuapp.com/properties/`);
      console.log('hi', result.data)
      setData(result.data);
      console.log(data)
    }, []);
    
    
    console.log(data)
    
    return (
        <div container spacing={24} style={{ padding: 20 }}>
            <h1
            >
            Properties:
            </h1>
            {/* {data.map(property => (
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
     */}
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