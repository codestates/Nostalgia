import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer'
import itemReducer from './itemReducer';
import notificationReducer from './nofiticationReducer';

const rootReducer = combineReducers({
  favoriteReducer,
  itemReducer,
  notificationReducer
});

export default rootReducer;