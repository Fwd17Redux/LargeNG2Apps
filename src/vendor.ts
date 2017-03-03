import * as numeral from 'numeral';
import './rxjs_imports';
import 'immutable';
import 'redux';
import 'redux-immutable';

if ('production' === ENV) {
  // Production
  if ('serviceWorker' in navigator) {
    const runtime = require('offline-plugin/runtime');

    runtime.install({
      onUpdating: () => {
        console.log('SW Event:', 'onUpdating');
      },
      onUpdateReady: () => {
        console.log('SW Event:', 'onUpdateReady');
        // Tells to new SW to take control immediately
        runtime.applyUpdate();
      },
      onUpdated: () => {
        console.log('SW Event:', 'onUpdated');
        // Reload the webpage to load into the new version
        window.location.reload();
      },
      onUpdateFailed: () => {
        console.log('SW Event:', 'onUpdateFailed');
      }
    });

    navigator['serviceWorker'].getRegistration().then(registration => {
      setInterval(() => {
        console.log('trying to update service worker');
        registration.update();
      }, 120000);
    });
  }
} else {
  // Development
  // big vendor bundle only in dev, aot bundle in main.ts is more effective for production build!
  require('@angular/platform-browser');
  require('@angular/platform-browser-dynamic');
  require('@angular/core');
  require('@angular/common');
  require('@angular/forms');
  require('@angular/http');
  require('@angular/router');
  require('@angularclass/hmr');
  require('ng2-redux');
  require('redux-logger');
}

// numeral config
numeral.language('de', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  currency: {
    symbol: '€'
  },
  ordinal: function (num) {
    return '.';
  },
});

// switch between languages
numeral.language('de');
