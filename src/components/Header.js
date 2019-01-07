import React from 'react';
import kubrick from '../kubrick.png'
import './header.css'

export default function Header(props){
    return(
        <div className='app'>
            <img src={kubrick} alt='The Movie App' />
            <p>THE MOVIE APP</p>
        </div>
    );
}