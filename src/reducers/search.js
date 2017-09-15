import {SEARCH} from '../constants/actions'
const initialState = {
  searchValue: ''
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchValue: action.data
      };
    default:
      return state
  }
}