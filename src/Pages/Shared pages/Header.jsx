// import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div className='text-center '>
            <img className='mx-auto' src={logo} alt=""/>
            <p>Journalism Without Fear or Favour</p>
           <p>{ moment().format("dddd,MMMM Do,YY")}</p> 
           <div className='flex gap-3'> 
           <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={150}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
           </div>
        </div>
    );
};

export default Header;