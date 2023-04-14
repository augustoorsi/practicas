import axios from "axios"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"

const URL_BASE = `https://be-a-rym.up.railway.app/api/character`
const API_KEY = `adf19002e024.e8aaaff920d6aff0a03e`


export default function Detail(){

    const {id} = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id]);
    

    return(<div>
        <h3>{character.name}</h3>
        <h3>{character.status}</h3>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.origin?.name}</h3>
        <img src={character.image} alt=""/>
        </div>
)}