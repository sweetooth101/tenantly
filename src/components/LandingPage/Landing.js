import React from 'react';
import Menu from '../Menu';
import IndexPage from './IndexPage';
import SecondHero from './SecondHero';



const Landing = () =>{
    return(
        <div className='landing-container'>
            <Menu />
            <IndexPage />
            <SecondHero />
        </div>
    )
}

export default Landing;