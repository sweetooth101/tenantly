import React from 'react';
import {Link} from 'react-router-dom';
import staticdata from './staticdata.json'
import { StartButton } from '../layer.js'
import Cell from './Cell'
import Card from './Card'

import styled from 'styled-components'

const IndexPage = () =>(
    <div className='hero'>
        <div className="intro-section">
        <div className="bg-stretch">
        <div className="slide-frame">
							<div className="text">
                <h1 className="slide-title">
                  Manage properties
                  <br /> at ease.
                </h1>
      <p>Take care of tedious property management tasks in one place. <br />Be in charge of your properties, anytime, anywhere.
       </p>
      <Link to={"/register"}>
        <StartButton className='start-button'>GET STARTED</StartButton>
      </Link>
      </div>
      </div>
   
      <div class="anchor-wrap">
					  <a href="#section1" className="anchor"><span></span></a>
				</div>
       </div>
        </div>
        <div className="Cards">
          <h2>All in one place</h2>
            <div className="CardGroup">
              <Card 
                title="Manage Properties"
                text="Learn More"
              image={require('../../images/manageprops.png')} />
              <Card 
                title="Tenant Information"
                text="Learn More"
                image={require('../../images/tenantinfo.png')} />
              <Card 
                title="Collect Payments"
                text="Learn More"
                image={require('../../images/collectpay.png')} />
              <Card 
                title="Handle Workorders"
                text="Learn More"
                image={require('../../images/workorders2.png')} />
          </div>
      </div>
    </div>
);

export default IndexPage;