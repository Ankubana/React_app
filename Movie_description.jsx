import react, { useState } from "react";
import { useParams,Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
const MovieDesc=({idmb})=>{
const [movieID,setMovieID]=useState([])
  const { imdbID } = useParams();
 console.log(imdbID)
  Search(idmb)
  async function Search(idmbId) {
 const data=await axios.get(`https://omdbapi.com/?apikey=4cfe7eb4&i=${imdbID }`)
      setMovieID(data)
       console.log(movieID)
   }
        return(
            <>
            
           
            <div className="arrow-navigation">
            
          <Link to="/LandingPage">
          <FontAwesomeIcon icon="arrow-left"className="arrow-left"/>
           </Link>
            </div>
            {
            movieID?
            <> 
              <div className="MovieDescription-wrapper" >
             < div className="Description_img">{<img src={movieID.data?.Poster} alt="" className="Description_img zoom-image"/> }</div>
               <div className="movie-details">
  <div className="row"><span className="T-label">Title:</span><span className="value"> {movieID.data?.Title}</span></div>
  <div className="row"><span className="T-label">Actors:</span><span className="value"> {movieID.data?.Actors}</span></div>
  <div className="row"><span className="T-label">Awards:</span><span className="value"> {movieID.data?.Awards}</span></div>
   <div className="row"><span className="T-label">Language:</span><span className="value"> {movieID.data?.Language}</span></div>
  <div className="row"><span className="T-label">Genre:</span><span className="value"> {movieID.data?.Genre}</span></div>
   <div className="row"><span className="T-label">RunTime:</span><span className="value"> {movieID.data?.Runtime}</span></div>
  <div className="row"><span className="T-label">Ratings:</span><span className="value"> {movieID.data?.imdbRating}</span></div>
  <div className="row"><span className="T-label">Country:</span><span className="value"> {movieID.data?.Country}</span></div>

</div>
     </div>   
            </>:null

            }
          
           </>
        )
}
export default MovieDesc