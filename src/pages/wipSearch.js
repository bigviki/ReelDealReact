import "../styles/app.css";
import SearchIcon from '../assets/search.svg';
import MovieCard from '../components/MovieCard';
import MovieSearch from "../components/MovieSearch";

const Search = () => {


    return (
        <>
        <div className="app">
        <div className="search">
            <MovieSearch />  
        </div>
        </div>
        </>
    );
};
 
export default Search;