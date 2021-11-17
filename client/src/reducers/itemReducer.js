import {HIT_THE_THUMB_BTN, CANCEL_THUMB_BTN, SET_QUANTITY} from './actions/index'
import {initialState} from './initialState'


const itemReducer = (state = initialState, action) => {

    switch (action.type){
        case HIT_THE_THUMB_BTN:
            return Object.assign({}, state, {
                favorites: action.payload.favorites
            });
        case CANCEL_THUMB_BTN:
            return Object.assign({}, state, {
                orders: action.payload.orders
            });
            default:
                return state;
    }
};

export default itemReducer