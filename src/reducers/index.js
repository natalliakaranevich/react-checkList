import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import currentSelected from './currentSelected';
import appReducer from './app';
import search from './search';
import filter from './filter';


export default combineReducers({
  router: routerReducer,
  currentSelectedItems: currentSelected,
  appState: appReducer,
  search: search,
  filter: filter
})