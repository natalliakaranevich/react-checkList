export  default function createStorage() {
  var s = {},
    noopCallback = function noopCallback() {},
    _itemInsertionCallback = noopCallback;

  Object.defineProperty(s, 'setItem', {
    get: function get() {
      return function (k, v) {
        k = k + '';
        if (!s.hasOwnProperty(k)) {
          _itemInsertionCallback(s.length);
        }
        s[k] = v + '';
      };
    }
  });
  Object.defineProperty(s, 'getItem', {
    get: function get() {
      return function (k) {
        k = k + '';
        if (s.hasOwnProperty(k)) {
          return s[k];
        } else {
          return null;
        }
      };
    }
  });
  Object.defineProperty(s, 'removeItem', {
    get: function get() {
      return function (k) {
        k = k + '';
        if (s.hasOwnProperty(k)) {
          delete s[k];
        }
      };
    }
  });
  Object.defineProperty(s, 'clear', {
    get: function get() {
      return function () {
        for (var k in s) {
          if (s.hasOwnProperty(k)) {
            delete s[k];
          }
        }
      };
    }
  });
  Object.defineProperty(s, 'length', {
    get: function get() {
      return Object.keys(s).length;
    }
  });
  Object.defineProperty(s, "key", {
    value: function value(k) {
      var key = Object.keys(s)[k];
      return !key ? null : key;
    }
  });
  Object.defineProperty(s, 'itemInsertionCallback', {
    get: function get() {
      return _itemInsertionCallback;
    },
    set: function set(v) {
      if (!v || typeof v != 'function') {
        v = noopCallback;
      }
      _itemInsertionCallback = v;
    }
  });
  return s;
}