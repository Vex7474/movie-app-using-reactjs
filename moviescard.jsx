import React from "react";

const moviescard =({movie}) =>{
    return(
        <div className='movie'>
            <div> 
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.poster!=='N/A' ? movie.Poster:'https://via.placeholder.com/400'} alt={movie.Poster}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title} </h3>
            </div>
        </div>
         
    )
}

export  default moviescard;
