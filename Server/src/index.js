const http = require("http")
const data = require("./utils/data")
const getCharById= require("./controllers/getCharById")

http
.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')

    const {url} = req
    const id = url.split("/").pop()

    if(url.includes("/rickandmorty/character/")){
        getCharById(res,id)
    }
    //     console.log(url);
    //     const id = url.split("/").pop()
    //     console.log(id);
    //     const character = data.find(character=> character.id == id)
    //     console.log(character);
        
    //     if(character){
    //         response.writeHead(200,{"Content-Type":"application/json"})
    //         return response.end(JSON.stringify(character))
    //     }
    //     else{
    //         response.writeHead(400,{"Content-Type":"application/json"})
    //         return response.end(JSON.stringify({error:"Character not found"}))
    //     }}
})
.listen(3001,'localhost')