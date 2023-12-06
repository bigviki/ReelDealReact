import { useNavigate } from "react-router-dom";
import Info from '../pages/Info';


const MovieCard = ({movie}) => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = Info;
        navigate(path);
    }


    

    return (
      
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>            
                <img src={movie.Poster !=='N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}  onClick={routeChange}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
     
    );
}

export default MovieCard;