import React from 'react';
import './movieDashboard.css'
import TopBar from "./TopBar";
import MovieCard from "./MovieCard";

export default function MovieDashboard(props){
    return(
        <div className='movie-dashboard'>
            <TopBar />
            <table>
                <tbody>
                    <div id='movie-cards'>
                      <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </tbody>
            </table>
        </div>
    );
}
