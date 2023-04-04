import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav"
import axios from "axios"

function App() {
   let [characters, setCharacters] = useState([])

   const onClose =(id)=>{
      let filterCharacter= characters.filter(character => character.id !== Number(id))
      setCharacters(filterCharacter)
   }

   const onSearch=(id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards onClose={onClose} characters={characters} />
      </div>
   );
}

export default App;
