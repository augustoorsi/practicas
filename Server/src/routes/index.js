const {login} = require("../controllers/login")
const getCharById= require("../controllers/getCharById")
const{postFav,deleteFav}=require("../controllers/handleFavorites")

const router = require("express").Router()

// GET getCharById: "/character/:id"
// GET login: "/login"
// POST postFav: "/fav"
// DELETE deleteFav: "/fav/:id"

router.get("/character/:id",(req,res)=>{
    getCharById(req,res)
})

router.get("/login",(req,res)=>{
    login(req,res)
})

router.post("/fav",(req,res)=>{
    postFav(req,res)
})

router.delete("/fav/:id",(req,res)=>{
    deleteFav(req,res)
})

module.exports=router;