import DataProvider from './data';
import {
  ADD_ITEM,
  SAVE_COLLECTION
} from '../constants/actions';


class ItemsListProvider extends DataProvider {
  triggerItem(data) {
    this.dispatch(ADD_ITEM, {
      data: data,
    });
  }

  saveItemsCollection() {
    this.dispatch(SAVE_COLLECTION, {
      data: true,
    });
  }
}

export default ItemsListProvider;
