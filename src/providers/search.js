import DataProvider from './data';
import {
  SEARCH
} from '../constants/actions';


class SearchProvider extends DataProvider {
  search(value) {
    this.dispatch(SEARCH, {
      data: value,
    });
  }
}

export default SearchProvider;
