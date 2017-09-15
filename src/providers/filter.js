import DataProvider from './data';
import {
  FILTER
} from '../constants/actions';


class FilterProvider extends DataProvider {
  filter(value) {
    this.dispatch(FILTER, {
      data: value,
    });
  }
}

export default FilterProvider;
