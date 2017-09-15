import {ADD_ITEM, SAVE_COLLECTION} from '../constants/actions'
const initialState = {
  saved: false,
  items: []
};

export default function currentSelected(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: action.data
      };
    case SAVE_COLLECTION:
      return {
        ...state,
        saved: action.data
      };
    default:
      return state
  }
}