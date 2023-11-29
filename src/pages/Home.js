import "../styles/app.css";
import {useEffect, useState} from 'react';
import MovieCard from '../components/MovieCard';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=873f94a8';

 
const Home = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('christmas');
      }, []);


    return (
        <>
            <div className="app">
                <h1 class="molot">ReelDeal</h1>
                <h2>Featured:</h2>
                {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => ( 
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )} 
            </div>
        </>
    );
};
 
export default Home;