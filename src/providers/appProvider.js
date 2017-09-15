import DataProvider from './data';
import {
  TRIGGER_MODAL
} from '../constants/actions';


class AppProvider extends DataProvider {
  triggerModal(show) {
    this.dispatch(TRIGGER_MODAL, {
      data: show,
    });
  }
}

export default AppProvider;