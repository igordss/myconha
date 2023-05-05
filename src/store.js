import { createStore } from 'redux';
import ageModalReducer from './reducers/ageModalReducer';

const store = createStore(ageModalReducer);

export default store;
