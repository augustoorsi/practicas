import { useState } from "react"
import validation from "./validation"

export default function Form({login}){

    const[errors, setErrors]= useState({})


    const [userData, setUserData]= useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({ ...userData, 
            [event.target.name]: event.target.value })
            
        setErrors(validation({...userData, 
            [event.target.name]: event.target.value}))
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        login(userData)

    }

    return(
        <form onSubmit={handleSubmit} action="">
            <label htmlFor=""> EMAIL
                <input value={userData.email} onChange={handleChange} name="email" type="text" />
                {errors.email && <p>{errors.email}</p>}
            </label>
            <label htmlFor=""> PASSWORD
                <input value={userData.password} onChange={handleChange} name="password" type="text" />
                {errors.password && <p>{errors.password}</p>}
            </label>
            <button>Submit</button>
        </form>
    )
}