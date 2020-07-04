import React from 'react';
import { Link } from 'react-router-dom';


import staticdata from './staticdata.json'

const PropertyCard = (props) =>{
  console.log(props)
    return(
        <div className='property-card' >
           
            <div className="propertyBody-info ">             
              <p>{props.name}</p>
            </div>
            <div className="propertyBody-info address">
            
              <p>{props.address}, {props.city} {props.zipcode} {props.state}</p>
              
            </div>
            
           
        </div>
    )
}


export default PropertyCard;