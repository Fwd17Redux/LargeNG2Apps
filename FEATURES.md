# Features of A2 starter project

## Development


### Webpack Dev Server

* Rebuilds on file save
* Incremental (fast) rebuilds
* included http server
* packages TS, JS, CSS, SASS, Assets


### HMR

HMR (hot module reloading) is an alternative to traditional reloading.
The broweser does not reload the page, only replaces the changed module.

* faster
* keeps state of application (like inputs in form fields)
* in combination with redux dev tools, we can time travel :)


### Tslint

Static code style analysis, including Angular 2 styleguide via

https://github.com/mgechev/codelyzer

### Karma Unit Tests

Including code coverage generation

* npm run test
* npm run test:watch

### Protractor E2E Tests

Working protractor config included

### Mock API

The NPM package JSON Server allows to serve a full featured REST API with minimal effort.

https://github.com/typicode/json-server

* just edit a JSON file
* npm run backend:mock


## Production Build

### Webpack

Bundles and minifes the files for production.

* UglifyJS
* Tree shaking
* Gzipping bundles
* MD5 hashes in filenames
* npm run build:prod


### Built in "Production" Server

* Fast local http server, that allows to configure caching and uses gzipped files
* npm run serve:prod


### Nsp

Automatically checks for vulnerabilities in npm packages.

* https://github.com/nodesecurity/nsp
* npm run nsp


### Angular AOT compilation

Angular compiler with static code inspection. Allows a far more optimized build.

* precompiles templates, not during runtime
* only imports the modules absolutely necessary => smaller build
* npm run ngc


### Offline caching

This is done via service workers.
The app itself is able to run completely offline (minus a REST API).


### API Documentation

The npm package typedoc is used to generate API docs from typescript code.

* npm run docs
