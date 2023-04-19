import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {addFav, removeFav } from "../../redux/action"
import { connect } from "react-redux";

export function Card({id,name,status,species,gender,origin,onClose,image, addFav, removeFav, myFavorites}){
   
   const [isFav, setIsFav] =useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div>
         <button onClick={handleFavorite}>{isFav?"❤️":"🤍"}</button>
         <button onClick={()=>onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`}>
         <h2>Name: {name}</h2>
         </NavLink>
         <h2>Status: {status} </h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapStateToProps = (state)=>{
   return{
      myFavorites:state.myFavorites
   }
}

const mapDispatchToProps= (dispatch)=> {
   return {
      addFav:(character)=>{dispatch(addFav(character))},
      removeFav:(id)=>{dispatch(removeFav(id))}
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);