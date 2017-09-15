import {TRIGGER_MODAL} from '../constants/actions'
const initialState = {
  displayModal: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TRIGGER_MODAL:

      return {
        ...state,
        displayModal: action.data
      };
    default:
      return state
  }
}