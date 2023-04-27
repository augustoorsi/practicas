// const axios = require("axios")

// const getCharById =(res,id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response =>{
//         const {id,name,gender,especies,origin,image,status} = response.data
//         res.writeHead(200,{"Content-Type":"application/json"})
//         res.end(JSON.stringify({id,name,gender,especies,origin,image,status}))})
//     .catch(error=> {
//         res.writeHead(500, {"Content-Type":"text/plain"})
//         res.end(error.message)
// })
// }

// module.exports= getCharById;


const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios")

// const getCharById = (req,res)=>{
//     const {id}= req.params
//     axios.get(`${URL}${id}`)
//     .then(response=>response.data)
//     .then(({id,name,gender,species,origin,image,status})=>{
//         if(name){
//             const character={id,name,gender,species,origin,image,status}
//             return res.status(200).json(character)
//         }
//             return res.status(404).send("Not found")
//         })
//     .catch(error=>{
//         return res.status(500).send(error.message)
//     })

// }
const getCharById= async (req,res)=>{
    try {
        const {id}= req.params
        const response = await axios.get(`${URL}${id}`)
        const character = response.data
        if(character.name) return res.status(200).json(character)
        return res.status(404).json("Not found")
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports=getCharById;
