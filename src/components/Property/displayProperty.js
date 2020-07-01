import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import staticdata from './staticdata.json'



function DisplayProperty(){
    const [property, setProperty] = useState(staticdata.properties);
    const [detele, setDetele] = useState(false);

    console.log('i',property.map(p =>(p)))

    return(
        <div className="property-display">
        <div className="options-right">
          <button
            className=" filled-button edit-button"
            onClick={null}
          >
            Edit
          </button>
          <button className=" notFilled-button" onClick={null}>
            Delete
          </button>
        </div>
{/* 
        {this.state.show ? (
          <DeleteModal
            deleteNote={this.deleteProperty}
            hideModal={this.hideModal}
          />
        ) : null} */}
        {property.map(p => (
          <div className="card" style={{width: "18rem"}} key={p.id}>
          <div className="propertyBody-left card-body" >
            <div className="propertyBody-info ">
              <h5>Name </h5>
              <p>{p.name}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Address</h5>
              <p>{p.address}</p>
            </div>
            <div className="propertyBody-info">
              <h5>City </h5>
              <p>{p.city}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Zipcode </h5>
              <p>{p.zip}</p>
            </div>
          </div>
          <div className="propertyBody-right">
            <div className="propertyBody-info">
              <h5>Sq. Ft. </h5>
              <p>{p.sqft}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Beds </h5>
              <p>{p.rooms}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Baths</h5>
              <p> {p.bathrooms}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Year Built </h5>
              <p>{p.year}</p>
            </div>
            <div className="propertyBody-info">
              <h5>Max </h5>
              <p>{3}</p>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    )

}

export default DisplayProperty;