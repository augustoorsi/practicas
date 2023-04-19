const validation=(userData)=>{
    const errors = {}
    //email
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email="Email invalido"}

    if(!userData.email){
        errors.email="Debe ingresar un email"}

    if(userData.email.length > 35){
        errors.email="No puede tener mas de 35 caracteres"}


    //password
    if(!/^(?=.*\d).+$/.test(userData.password)){
        errors.password="Debe tener un numero"}

    if(userData.password.length<6||userData.password.length >10){
        errors.password= "Longitud erronea"}

    return errors

}

export default validation