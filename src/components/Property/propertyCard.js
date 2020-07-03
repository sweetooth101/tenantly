import React from 'react';
import { Link } from 'react-router-dom';


import staticdata from './staticdata.json'

const PropertyCard = (props) =>{
  console.log(props)
    return(
        <div className='property-card' >
            <Link>
            <div className="propertyBody-info ">
              <h1>Name </h1>
              <p>{props.name}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Address</h1>
              <p>{props.address}</p>
            </div>
            <div className="propertyBody-info">
              <h1>City </h1>
              <p>{props.city}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Zipcode </h1>
              <p>{props.zipcode}</p>
            </div>
    
         
          <div className="propertyBody-right">
            <div className="propertyBody-info">
              <h1>Sq. Ft. </h1>
              <p>{props.sqft}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Beds </h1>
              <p>{props.rooms}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Baths</h1>
              <p> {props.bathrooms}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Year Built </h1>
              <p>{props.year}</p>
            </div>
            <div className="propertyBody-info">
              <h1>Max </h1>
              <p>{3}</p>
            </div>
            </div>
            </Link>
        </div>
    )
}


export default PropertyCard;