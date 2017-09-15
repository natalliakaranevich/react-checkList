class DataProvider {

  constructor(dispatch, options = {}) {
    const { action, suffix} = options;

    this._dispatch = dispatch;
    this._actionSuffix = suffix ? '_' + suffix.toUpperCase() : '';
    this._action = action !== undefined ? !! action : true;
  }

  _isObject(data) {
    // probably the best solution
    return Object.prototype.toString.call(data) === '[object Object]';
  }

  _isArray(data) {
    // probably the best solution
    return Array.isArray(data);
  }

  form(data, path = '') {
    // experimental
    // A. flatten data for ReduxForm digestion
    // example: {a: 'A', b: {b1: 'B1', b2: 'B2'}} -> {a: 'A', b__b1: 'B1', b__b2: 'B2'}
    // B. replace null values with empty strings

    if (this._isArray(data)) {
      return data.map(value => this.form(value));
    }

    if (this._isObject(data)) {
      let obj = {};

      Object.keys(data).forEach(prop => {
        let formObj = this.form(data[prop], path + prop + '__');

        if (this._isObject(formObj)) {
          Object.assign(obj, formObj);
        } else {
          obj[path + prop] = formObj;
        }
      });

      return obj;
    }

    return data === null ? '' : data;
  }

  formData(data) {
    let formData = new FormData();
    data = data || {};

    for (let prop in data) {
      (typeof data[prop] !== 'undefined') && formData.append(prop, data[prop]);
    }

    return formData;
  }

  dispatch(action, data) {
    const _action = Object.assign({
      type: action + this._actionSuffix,
    }, data);

    this._action && this._dispatch(_action);
  }

  buildQueryString(params) {
    let queryString = Object.keys(params).map(k => `${k}=${params[k]}`).join('&');
    if (queryString.length) queryString = '?' + queryString;
    return queryString;
  }
}

export default DataProvider;
