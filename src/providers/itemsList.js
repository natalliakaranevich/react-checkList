/*global localStorage*/
import DataProvider from './data';
import {
  ADD_ITEM,
  SAVE_COLLECTION,
  CHANGE_COLLECTION
} from '../constants/actions';
import storageAvailable from '../utils';
const Storage = window.localStorage;

class ItemsListProvider extends DataProvider {
  triggerItem(data, remove) {
    this.dispatch(ADD_ITEM, {
      data: data,
    });

    if (remove) {
      storageAvailable && Storage.setItem('selectedItems', JSON.stringify(data));
      this.shouldUpdateTopItemsCollection(false);
    } else {
      this.shouldUpdateTopItemsCollection(true);
    }
  }

  removeItem(data) {
    this.dispatch(ADD_ITEM, {
      data: data,
    });

    storageAvailable && Storage.setItem('selectedItems', JSON.stringify(data));
    this.shouldUpdateTopItemsCollection(false);
  }

  shouldUpdateTopItemsCollection(flag) {
    this.dispatch(CHANGE_COLLECTION, {
      data: flag,
    });
  }

  saveItemsCollection() {
    this.dispatch(SAVE_COLLECTION, {
      data: true,
    });
  }
}

export default ItemsListProvider;
