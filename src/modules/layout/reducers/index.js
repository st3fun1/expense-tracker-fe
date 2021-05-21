import initialState from "./initialState";
import actionTypes from "../actions/actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LAYOUT_DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
