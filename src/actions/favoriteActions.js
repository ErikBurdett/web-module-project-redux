export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorites = () =>{
    return({type: TOGGLE_FAVORITES});
}
export const addFavorite = () =>{
    return({type: ADD_FAVORITE, payload:movie});
}
export const removeFavorite = () =>{
    return({type: REMOVE_FAVORITE, payload:id});
}
