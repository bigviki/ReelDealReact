import '../styles/app.css';
import ReviewContainer from './ReviewContainer';
import MovieCard from './MovieCard';
import {useEffect, useState} from 'react';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=873f94a8';


const InfoCard = ({movie}) => {
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
        // <div className="movie">
        //     <div>
        //         <p>{movie.Year}</p>
        //     </div>
        //     <div>            
        //         <img src={movie.Poster !=='N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        //     </div>
        //     <div>
        //         <span>{movie.Type}</span>
        //         <h3>{movie.Title}</h3>
        //     </div>
        // </div>

        <>
        {/* <div className="container">
                    {movies.map((movie) => ( 
                        <MovieCard movie={movie} />
                    ))}
                </div> */}
        <section class="info">
            <img class="info" src='sunset1.jpg' alt='movie poster'></img>
            <section class="info-textbox">
                {/* <h1>{movie.Title}</h1> */}
                <h4 >Rating: (avg scores)/5</h4> 
                {/* style=" text-align:right" */}
                <p>
                    infooooooooooooooooooooooooooo
                </p>
            </section>
        </section>
            <br></br><br></br>
        <section class="info" >
            {/* <ReviewContainer /> */}
        </section>
        </>
    );
}

export default InfoCard;