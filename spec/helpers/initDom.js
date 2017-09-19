// Create a DOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import $ from 'jquery';
import createStorage from './mock-localstorage';

var window = new JSDOM('<html><head></head><body></body></html>').window;

if(Object.keys(window).length === 0) {
  // this hapens if contextify, one of jsdom's dependencies doesn't install correctly
  // (it installs different code depending on the OS, so it cannot get checked in.);
  throw 'jsdom failed to create a usable environment, try uninstalling and reinstalling it';
}

global.window = window;
global.$ = global.jQuery = $;
global.document = window.document;
global.window.localStorage = createStorage();

propagateToGlobal(window);

function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;

    global[key] = window[key];
  }
}

console.log('++++++++++++');
console.log(global.window.navigator);