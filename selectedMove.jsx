import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import MovieDesc from "./Movie_description";
import axios from "axios";

 const SelectMovie=({selectMovie,inputval})=>{
     const [movieId,setMovieId]=useState("")
     const [data,setData]=useState()
      const Navigate = useNavigate();
     async  function movie_Description(value){
     
     const MovieId=value
     console.log(MovieId)
     const{data}=await axios.get("https://omdbapi.com/?apikey=4cfe7eb4&s=fast")
          setData(data)
          setMovieId(MovieId)
          console.log(MovieId)
          if (MovieId)
           Navigate(`/Movie_description/${MovieId}`);
    }
    
return(
<>
<div>{inputval}</div>
     {
      selectMovie?.Search.slice(0,6).map((movie)=>(
         <> <div>
             <div className="project_Description">
    < img src={ movie.Poster } className="project__images zoom-image"  onClick={()=>movie_Description(movie.imdbID)} />
     
         <div><span className="move_Title">Title:</span>{movie.Title} </div>
       <div><span className="move_year">Year:</span> {movie.Year}</div>
        <div><span className="move_Type">Type:</span>{movie.Type}</div>
          </div>
          { movieId?
          <MovieDesc  Data={data}  idmb={movieId}/>
           :null
 } 
    </div>
   
            </>
    
      )
       
        )
      
   
      }
</>

  )

 }
 export default SelectMovie