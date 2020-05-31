import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import  GoogleAuth from './GoogleAuth';

const Header =()=>{
    return( 
    <div className='ui secondary pointing menu'>
    
        <Link to ='/' className='item'>
            STREAMY
        </Link> 

        <div className='right menu'>
        <Link to ='/' className='item'>
           ALL STREAMS
        </Link> 
      <GoogleAuth/>
     </div>
    </div>
        );
};

export default Header;