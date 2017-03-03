// import 'core-js/shim';
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/weak-map';
import 'core-js/es6/weak-set';
import 'core-js/es6/typed';
import 'core-js/es6/reflect';
import 'core-js/es6/promise';

import 'core-js/es7/reflect';
import 'core-js/es7/object';

import 'zone.js/dist/zone';
import 'ts-helpers';

/*
 * Optional polyfills
 *
 * Usage depends on the given browser matrix, see
 * https://angular.io/docs/ts/latest/guide/browser-support.html
 *
 * Comment all polyfills not needed in project!
 */

// Intl API is not supported in IE < 11 and Safari < 10
// needed for date and number pipes
import 'intl';
// add more languages if necessary for project
import 'intl/locale-data/jsonp/de-DE';
import 'intl/locale-data/jsonp/en-US';

// If we need to support IE9
// needed for HTTP with binary data
import 'blob-polyfill';
import 'typedarray';
// found no npm installable package for this one
import './polyfill-formdata';

// IE10 & IE11 do not completely implement classList
// needed for some edge cases with ngClass
import 'classlist-polyfill';

// if you make use of advanced console commands: console.group (like redux-logger), console.time etc.
// needed for IE < 11
import 'console-polyfill';


if ('production' === ENV) {

} else {
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
