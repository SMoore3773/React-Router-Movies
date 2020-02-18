import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MustWatch =(props) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
      const getMovies = () => {
        axios
          .get('http://localhost:5000/api/movies')
          .then(response => {
            console.log('movies in mustwatch axios',response.data);
            setMovies(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getMovies();
    }, []);

    const metaMovies = [];
    movies.forEach((movie)=>{if(movie.metascore >=90){ metaMovies.push(movie)}})
    console.log('metamovies',metaMovies)
    
    return(
        <div>
        {metaMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} renSav={false} />
          ))}
          </div>
    );
}

export default MustWatch;