import initialState from './initialState';
import actionTypes from './action/actionTypes';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LAYOUT_DRAWER_OPEN:
            return {
                ...state,
                isDrawerOpen: action.payload
            };
    }
}

export default reducer;reducer