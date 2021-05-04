import { combineReducers} from 'redux';
import layoutReducer from 'modules/layout/reducers';

const rootReducer = combineReducers({
    layout: layoutReducer
});

export default rootReducer;