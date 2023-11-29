import "../styles/app.css";
import {useEffect, useState} from 'react';
import SearchIcon from '../assets/search.svg';
import MovieCard from '../components/MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=873f94a8';

 
const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('vampire');
    }, []);

    return (
        <>
        <div className="app">
        <div className="search">
            <input
                placeholder="Search for movies"
                value = {searchTerm}
                onChange = {(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt ="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

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
 
export default Search;