import React from 'react';
import Menu from './Menu';
import IndexPage from './IndexPage';



const Landing = () =>{
    return(
        <div className='landing-container'>
            <Menu />
            <IndexPage />
        </div>
    )
}

export default Landing;