import { ADD_FAVORITE , CANCEL_FAVORITE } from './actions/index'
import {initialState} from './initialState'


const favoritesReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return Object.assign({},state, {
                favorites: [...state.favorites, action.payload]
            });
        case CANCEL_FAVORITE:
            return Object.assign({},state,{
                favorites: state.favorites.filter(el => el.favorites !== action.payload.favorites)
            });
        default:
            return state;
    }
}

export default favoritesReducer