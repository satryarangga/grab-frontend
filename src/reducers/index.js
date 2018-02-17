import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import restoReducer from './reducerResto';

const rootReducer = combineReducers({
	resto: restoReducer,
	form: formReducer
});
export default rootReducer;