// import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "./App.css"

const IMG_URL = `https://cataas.com/cat/says/`

const App = ()=>{ 
    const [fact, setFact] = useState()
    const firstWord = fact?.split(" ", 3).join(" ")

    const handleOnclick = ()=>{

    }
    
    useEffect(()=>{
        // axios("https://catfact.ninja/fact")
        // .then(res=>console.log(res))
        fetch("https://catfact.ninja/fact")
        .then(res=> res.json())
        .then(data=> setFact(data.fact))
    },[])


    return(
        <div>
            <h1>CATS APP</h1>
            <button onClick={handleOnclick}>New Fact</button>
            {fact && <p>{fact}</p>}
            {firstWord && <img src={`${IMG_URL}${firstWord}`} />}
        </div>
    )
}

export default App