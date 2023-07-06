import { createStore, combineReducers } from 'redux';
import ageModalReducer from './reducers/ageModalReducer';
import descriptionReducer from './reducers/descriptionReducer';
import cartReducer from './reducers/cartReducer';
import searchReducer from './reducers/searchReducer';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
  ageModal: ageModalReducer,
  description: descriptionReducer,
  cart: cartReducer,
  search: searchReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
