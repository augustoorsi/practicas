import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav"
import axios from "axios"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorite/Favorites';

//const URL_BASE = `https://be-a-rym.up.railway.app/api/character`
//const API_KEY = `adf19002e024.e8aaaff920d6aff0a03e`
const URL_NEW = `http://localhost:3001/rickandmorty/character`

function App() {
   let [characters, setCharacters] = useState([])
   const[access, setAccess]=useState(false)
   let EMAIL = "augusford@hotmail.com"
   let PASSWORD = "qwerty7"
   const navigate= useNavigate()

   useEffect(()=>{
      !access && navigate("/")},[access, navigate])

   const login = (userData)=>{
      if (EMAIL === userData.email && PASSWORD === userData.password){
         setAccess(true)
         navigate("/home")
      }

   }

   const onClose =(id)=>{
      console.log(id);
      let filterCharacter= characters.filter(character => character.id !== id)
      setCharacters(filterCharacter)
   }

   const onSearch=(id)=> {
      axios(`${URL_NEW}/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const location = useLocation()

   return (
      <div className='App'>
         {(location.pathname !== "/")? <Nav setAccess={setAccess} onSearch={onSearch} /> : null}
         <Routes>
            <Route path='/favorites' element={<Favorites></Favorites>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards path="/home" onClose={onClose} characters={characters} />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>} ></Route>
            <Route path='*' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
