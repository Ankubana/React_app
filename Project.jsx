import { useEffect, useState } from "react";
import image from "./FSE_img.png"
const Project=({movieSelected,check})=>{
const [moveHalf,setMoveHalf]=useState()
const [search_move,setsearch_move]=useState(null)
useEffect(()=>{
 if (movieSelected!=null && check==null)
    {
      console.log(check)
     setsearch_move("Movies__image")
    }
 else  if (check!=null&&movieSelected===null){
  setMoveHalf("MoveHalf__img")
 } else  if (check==null&&movieSelected!=null){
   setMoveHalf("MoveHalf__img")
 }
 else  if (check!=null&&movieSelected!=null){
 setsearch_move("MoveHalf_img")
setMoveHalf("MoveHalf_img")
 }
 })
    return(
 <section className="project">
  <figure className="project__img">
    {
  (movieSelected=="null"&&check!=null)?<>
  <img src={movieSelected.map((user)=>user.Poster)} alt="" className={search_move}/>
    </>:check==null&&movieSelected==null? 
    <div className="T">
     <img src={image} className="project__img"></img>
     </div>
    :null
}
 {
  (movieSelected!=null&&check==null)?<>
  <img src={movieSelected.map((user)=>user.Poster)} alt="" className={search_move}/>
    </>:null
}
    {
 check?<>
  <img src={check.map((user)=>user.Poster)} alt="" className={moveHalf}/>
    </>:
    null
}
  </figure>
  
 </section>
           )
}
export default Project