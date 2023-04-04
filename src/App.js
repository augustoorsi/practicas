import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav"
import axios from "axios"
import { Route, Routes } from 'react-router-dom';
import About from "./components/About"
import Detail from "./components/Detail"
import Error from './components/Error';

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
         <Nav path=':' onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards path="/home" onClose={onClose} characters={characters} />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>} ></Route>
            <Route path='*' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
