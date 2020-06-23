import React from 'react';
import {Link} from 'react-router-dom';
import staticdata from './staticdata.json'
import { StartButton } from '../layer.js'
import Cell from './Cell'
import Card from './Card'

import styled from 'styled-components'



const Cells = styled.div`
  /* border: 1px solid red; */
  background-color: #f99a95;
`

const SectionCaption = styled.p`
  margin-bottom: 70px;
  font-size: 76px;
  text-align: center;
  font-weight: 600;
  background: white;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 50px;
  
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  padding-bottom: 50px;


  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
      <Cells>
      <SectionCaption>All your needs and wants</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell 
            title={cell.title}
            image={cell.image} />
        ))}
      </SectionCellGroup>
    </Cells>
    </div>
);

export default IndexPage;