import React from 'react';
import Menu from '../Menu';
import IndexPage from './IndexPage';
import SecondHero from './SecondHero';
import Footer from './Footer';



const Landing = () =>{
    return(
        <div className='landing-container'>
            <Menu />
            <IndexPage />
            <SecondHero />
            <Footer/>
        </div>
    )
}

export default Landing;