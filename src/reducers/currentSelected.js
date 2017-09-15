/* global localStorage */

import {ADD_ITEM, SAVE_COLLECTION, CHANGE_COLLECTION } from '../constants/actions';
import storageAvailable from '../utils';
const Storage = localStorage;

const selectedItems = (storageAvailable && JSON.parse(Storage.getItem('selectedItems'))) || [];

const initialState = {
  saved: !!selectedItems.length,
  update: false,
  items: selectedItems
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
        saved: action.data,
        update: false
      };
    case CHANGE_COLLECTION:
      return {
        ...state,
        update: action.data
      };
    default:
      return state
  }
}