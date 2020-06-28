import React from 'react';
import { Link } from 'react-router-dom';


import staticdata from './staticdata.json'

const PropertyCard = props =>{
    return(
        <div className='card' style={{width: "18rem;"}}>
            <Link>
            <div className="propertyBody-info ">
              <h5>Name </h5>
              <p>{staticdata.properties[0].name}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Address</h5>
              <p>{staticdata.properties[0].address}</p>
            </div>
            <div className="propertyBody-info">
              <h5>City </h5>
              <p>{staticdata.properties[0].city}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Zipcode </h5>
              <p>{staticdata.properties[0].zip}</p>
            </div>
    
         
          <div className="propertyBody-right">
            <div className="propertyBody-info">
              <h5>Sq. Ft. </h5>
              <p>{staticdata.properties[0].sqft}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Beds </h5>
              <p>{staticdata.properties[0].rooms}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Baths</h5>
              <p> {staticdata.properties[0].bathrooms}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Year Built </h5>
              <p>{staticdata.properties[0].year}</p>
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