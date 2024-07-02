/*import React, { useEffect, useState } from 'react';
import searchicon from './search.svg'
import Moviecard from './moviescard.jsx'

const API_url ='http://www.omdbapi.com/?i=tt3896198&apikey=4adc23a6';

const App=()=>{
  const [searchTerm, setSearchTerm] = useState('');
  const [movies,setmovies]=useState([]);
  
  const searchmovies=async (title)=>{
    const response=await fetch(`${API_url}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
    console.log(data)

  }
  useEffect(()=>{
    searchmovies('spiderman');
  },[]);
 
return(
  <div className='app'>
  <h1>MOVIECORN</h1>
  <div className='search'>
    <input 
    placeholder='Search for movies'
    value={searchTerm}  
    onChange={(e)=>setSearchTerm(e.target.value)}
    />
    <img
    src={searchicon}
    alt='search'
    onClick={()=> searchmovies(searchTerm)}
    />
  </div>
  {
    movies?.length>0
    ?(
      <div className='container'>
      {movies.map((movie) =>(
        <Moviecard movie={movie}/>
      ))}
  </div>
    ):(
      <div className='empty'>
    <h1>no movies found</h1>
  </div>
    )
  }
</div>
);
}
export default App;*/

/* App.js from blackbox
import React, { useEffect, useState } from 'react';
import searchicon from './search.svg'
import Moviecard from './moviescard.jsx'

const API_url ='http://www.omdbapi.com/?i=tt3896198&apikey=4adc23a6';

const App=()=>{
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchmovies = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleMovieClick = async (movie) => {
    // handle movie click logic here
    console.log(`Movie clicked: ${movie.Title}`);
  };

  useEffect(()=>{
    searchmovies('spiderman');
  },[]);

  return (
    <div className='app'>
      <h1>MOVIECORN</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={searchTerm}  
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
          src={searchicon}
          alt='search'
          onClick={()=> searchmovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
        ? (
            <div className='container'>
              {movies.map((movie) => (
                <Moviecard 
                  key={movie.imdbID} 
                  movie={movie} 
                  onClick={handleMovieClick} 
                />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h1>no movies found</h1>
            </div>
          )
      }
    </div>
  );
}

export default App;*/

// App.js
import React, { useEffect, useState } from 'react';
import searchicon from './search.svg';
import Moviecard from './moviescard.jsx';

const API_url = 'http://www.omdbapi.com/?apikey=4adc23a6';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchmovies = async (title) => {
    try {
      if (title.trim() !== '') {
        const response = await fetch(`${API_url}&s=${title}`);
        const data = await response.json();
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleMovieClick = async (movie) => {
    console.log(`Movie clicked: ${movie.Title}`);
  };

  useEffect(() => {
    searchmovies('spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>MOVIECORN</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchicon}
          alt='search'
          onClick={() => searchmovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <Moviecard key={movie.imdbID} movie={movie} onClick={handleMovieClick} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h1>no movies found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
