import {ADD_FAV, REMOVE_FAV,ORDER, FILTER} from "./action-types"

const initialState = {
    myFavorites:[],
    allCharactersFav:[]
}

const reducer = (state = initialState, {type, payload}) =>{
    switch(type){

        case ADD_FAV:
            return { ...state, myFavorites: [...state.allCharactersFav ,payload], allCharactersFav:[...state.allCharactersFav, payload] };

        case REMOVE_FAV:
            let removedCharacter = state.allCharactersFav.filter(character=> character !== payload)
            return { ...state, myFavorites: removedCharacter, allCharactersfav: removedCharacter };

        case FILTER:
            let allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
            return{
                ...state,
                myFavorites:
                    payload ==="allCharacters"
                    ?[...state.allCharactersFav]
                    :allCharactersFiltered
            }

        case ORDER:
            let allCharactersFavCopy = [...state.allCharactersFav]
            return{
                ...state,
                allCharactersFav: 
                    payload === "A"
                    ? allCharactersFavCopy.sort((a,b)=> a.id - b.id)
                    : allCharactersFavCopy.sort((a,b)=> b.id - a.id)
            }


        default:
            return {...state};
    }

}

export default reducer;