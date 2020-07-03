import React from 'react';
import { Link } from 'react-router-dom';


import staticdata from './staticdata.json'

const PropertyCard = (props) =>{
  console.log(props)
    return(
        <div className='card' style={{width: "18rem;"}}>
            <Link>
            <div className="propertyBody-info ">
              <h5>Name </h5>
              <p>{props.name}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Address</h5>
              <p>{props.address}</p>
            </div>
            <div className="propertyBody-info">
              <h5>City </h5>
              <p>{props.city}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Zipcode </h5>
              <p>{props.zipcode}</p>
            </div>
    
         
          <div className="propertyBody-right">
            <div className="propertyBody-info">
              <h5>Sq. Ft. </h5>
              <p>{props.sqft}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Beds </h5>
              <p>{props.rooms}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Baths</h5>
              <p> {props.bathrooms}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Year Built </h5>
              <p>{props.year}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Max </h5>
              <p>{3}</p>
            </div>
            </div>
            </Link>
        </div>
    )
}


export default PropertyCard;