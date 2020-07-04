import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropertyCard from './propertyCard';
import axios from 'axios';
import staticdata from './staticdata.json'

function PropertyList(){

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('react');

    const [detele, setDetele] = useState(null);

   

    useEffect(() => {
        let ignore = false;
    
        async function fetchData() {
          const result = await axios('https://tenantly-back.herokuapp.com/properties/' );
          if (!ignore) setData(result.data);
        }
    
        fetchData();
        return () => { ignore = true; }
      }, []);


  
    
    console.log('bu',data.map(p =>(p.name)))
    
    return (
        <div className='container-propertyList'>
            <h1
            >
            Properties:
            </h1>
           <div className='property-list'>
            {data.map(property => (
                <Link to='property'>
                    <PropertyCard
                    key={property.id}
                    name={property.name}
                    address={property.address}
                    city={property.city}
                    state={property.state}
                    zipcode={property.zip}
                    id={property.id}
                />
                
                </Link>
                
                ))}
                <Link to='add-property'>
                    <div className='add'>
                    
                    
                    + Add New Property
                
            
                    </div>
                </Link>
                
           </div>
            
    
            
        </div>
        );
}

export default PropertyList;