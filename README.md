# DCS Food Order Project

## Installation

```bash
git clone
cd FOLDERNAME
npm install # will throw warnings about missing python on windows - just ignore, still works
npm run watch:dev:hmr # or watch:dev for classic reload insted of HMR
```

On second console, start the fake REST backend (if necessary):

```bash
npm run backend:mock
```

Then open your browser at http://localhost:3000 to view the app.

to get the best development experience, install

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

for a little time travel debugging, state dump/load ...


## Karma tests

Run once with coverage generation:

```bash
npm test
```

Then open coverage/html/index.html for the coverage report.

Run during development:

```bash
npm run test:watch
```


## Build for production

```bash
npm run build:prod # get coffee
npm run serve:prod # little test server for the production build
```

Then open your browser at http://localhost:8080 to view the app.
