import '../styles/app.css';
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
        <section class="info">
            <img class="info" src="poster.jpg" alt="movie_poster"></img>
            <section class="info-textbox">
                <h1>Movie name</h1>
                <h4 >Rating: (avg scores)/5</h4> 
                {/* style=" text-align:right" */}
                <p>
                    Description feawiodnjsjfkllllllllllliovhaslcbjkn am,sdkljbsawnmqaod
                    sihubcjkwm
                    qdasiohcubkjnwqdasijcobudkjernkfsdvibdkje
                    fnwsdiohbefkwndsihoeib
                    feawiodnjsjfkllllllllllliovhaslcbjkn am,sdkljbsawnmqaod
                    sihubcjkwm
                    qdasiohcubkjnwqdasijcobudkjernkfsdvibdkje
                    fnwsdiohbefkwndsihoeib
                    feawiodnjsjfkllllllllllliovhaslcbjkn am,sdkljbsawnmqaod
                    sihubcjkwm
                    qdasiohcubkjnwqdasijcobudkjernkfsdvibdkje
                    fnwsdiohbefkwndsihoeib
                </p>
            </section>
        </section>
            <br></br><br></br>
        <section class="info" >
            {/* style="display:block" */}
            <h2>Reviews</h2>
            <div class="review-container">
                <h1 class="review-title">Movie Review: "Title of the Movie"</h1>
                <div class="review-content">
                    <p class="review-text">
                        This is a sample movie review text. You can provide your detailed review here, discussing the plot, characters, and your overall opinion of the movie.
                    </p>
                    <p class="review-author">Review by John Doe</p>
                </div>
                
                <div class="review-form">
                    <h2 class="form-label">Write Your Review:</h2>
                    <label for="movieName">Movie Name:</label>
                    <input type="text" id="movieName" class="form-input" placeholder="Enter movie name"></input>
                    <label for="description">Review Description:</label>
                    <textarea id="description" class="form-textarea" placeholder="Write your review description"></textarea>
                    <label for="rating" class="form-rating">Star Rating (out of 5):</label>
                    <input type="number" id="rating" class="form-input" placeholder="Enter your rating (1-5)"></input>
                </div>
            </div>
        </section>
        </>
    );
}

export default InfoCard;