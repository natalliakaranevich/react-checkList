import {FILTER} from '../constants/actions'
const initialState = {
  filterValue: 0
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filterValue: action.data
      };
    default:
      return state
  }
}