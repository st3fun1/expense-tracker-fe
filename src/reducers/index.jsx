import { combineReducers} from 'redux';

const userReducer = (state = 0, action) => state

const expensesReducer = (state = 1, action) => state

const rootReducer = combineReducers({
    user: userReducer,
    expenses: expensesReducer
});

export default rootReducer;