// Required Package Import;
import { combineReducers } from 'redux';
import courseReducer from './reducer';

//CombineReducers
const rootReducer = combineReducers({
    course: courseReducer,
});

//RootReducer Export;
export default rootReducer;
