import { ADD_TO_BOOKMARK, REMOVE_FROM_BOOKMARK } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return Object.assign({}, state, {
        bookmarkedItems: [...state.bookmarkedItems, action.payload],
      });
    case REMOVE_FROM_BOOKMARK:
      return Object.assign({}, state, {
        bookmarkedItems: state.bookmarkedItems.filter(
          (el) => el.id !== action.payload.itemId
        ),
      });
    default:
      return state;
  }
};

export default itemReducer;

/*
import { REMOVE_FROM_BOOKMARK, ADD_TO_BOOKMARK } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return Object.assign({}, state, {
        bookmarkedItems: [...state.bookmarkedItems, action.payload],
      });
    case REMOVE_FROM_BOOKMARK:
      return Object.assign({}, state, {
        bookmarkedItems: state.bookmarkedItems.filter(
          (el) => el.id !== action.payload.itemId
        ),
      });
    default:
      return state;
  }
};

export default itemReducer;
*/
