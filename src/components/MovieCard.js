import React from 'react';
import kubrick from '../kubrick.png';
import './movieCard.css';

export default class MovieCard extends React.Component {
    render(){
        return(
            <div className='movie-card'>
                <img src={kubrick}/>
                <ul>
                    <strong><li>Movie Title</li></strong>
                    <li>(2036)</li>
                    <i><li>Director</li></i>
                </ul>
            </div>
        );
    }
}