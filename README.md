# ng2-bootstrap [![npm version](https://badge.fury.io/js/ng2-bootstrap.svg)](http://badge.fury.io/js/ng2-bootstrap) [![npm downloads](https://img.shields.io/npm/dm/ng2-bootstrap.svg)](https://npmjs.org/ng2-bootstrap)
Native Angular2 directives for Bootstrap, works with Bootstrap 3 and 4-alfa

Follow me [![twitter](https://img.shields.io/twitter/follow/valorkin.svg?style=social&label=%20valorkin)](https://twitter.com/valorkin) to be notified about new releases.

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/valor-software/ng2-bootstrap.svg?branch=master)](https://travis-ci.org/valor-software/ng2-bootstrap)
[![codecov](https://codecov.io/gh/valor-software/ng2-bootstrap/branch/development/graph/badge.svg)](https://codecov.io/gh/valor-software/ng2-bootstrap)
[![slack](https://img.shields.io/badge/join-slack-brightgreen.svg)](https://www.hamsterpad.com/chat/ng2)
[![Join the chat at https://gitter.im/valor-software/ng2-bootstrap](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/valor-software/ng2-bootstrap?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/valor-software/ng2-bootstrap.svg)](https://david-dm.org/valor-software/ng2-bootstrap)
[![NPM](https://nodei.co/npm/ng2-bootstrap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/anymatch/)
[![NPM](https://nodei.co/npm-dl/ng2-bootstrap.png?height=3&months=9)](https://nodei.co/npm-dl/anymatch/)
[![Throughput Graph](https://graphs.waffle.io/valor-software/ng2-bootstrap/throughput.svg)](https://waffle.io/valor-software/ng2-bootstrap/metrics)


<!---
[![Test Coverage](https://codeclimate.com/github/valor-software/angular2-bootstrap/badges/coverage.svg)](https://codeclimate.com/github/valor-software/angular2-bootstrap/coverage)
-->

# Usage & Demo

[http://valor-software.github.io/ng2-bootstrap/](http://valor-software.github.io/ng2-bootstrap/)

## If you need more modules check [here](https://github.com/valor-software/ng2-plans)

# Starter packages

*Hint*: simpliest way to add styles is a CDN:
```html
<!-- index.html -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
```

### With system.js: [angular2-quickstart](https://github.com/valor-software/angular2-quickstart)

### With webpack: [AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)
- install `ng2-bootstrap` and typings for `moment.js`
```bash
  npm install ng2-bootstrap --save
  # Install typings from NPM. Ambient typings will not help
  typings install moment --save
```
- add some code
```html
  <!-- src/app/home/home.html -->
  <alert type="info">Hello from ng2-bootstrap  {{ date.toDateString() }}</alert>
  <div style="display:inline-block; min-height:290px;">
    <datepicker [(ngModel)]="date" showWeeks="true"></datepicker>
  </div>
```
```js
  /* src/app/main.ts */
  import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
  ...
  @NgModule({
    imports: [
      ...
      AlertModule,
      DatepickerModule
    ]
    ...
  })
  export class AppModule {
  }

  /* src/app/home/home.ts */
  ...
  @Component({
    templateUrl: 'src/app/home/home.html'
  })
  export class Home {
    date: Date = new Date();
  }
```

### With gulp and system.js: [pkozlowski-opensource/ng2-play](https://github.com/pkozlowski-opensource/ng2-play) or [mgechev/angular2-seed](https://github.com/mgechev/angular2-seed)
- *hint*: see `quickstart` section below for samples
- just add link to `ng2-bootstrap` `system.js` bundle to `index.html` like in [angular2-quickstart](https://github.com/valor-software/angular2-quickstart)
- and `moment.js` map in `system.js` configuration

## Install from npm

```bash
npm i ng2-bootstrap --save
```

## Install from CDN

Check [cdnjs](https://cdnjs.com/libraries/ng2-bootstrap) to include `ng2-bootstrap` as `system.js` bundle
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/x.x.x/ng2-bootstrap.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
```

## Quick start

*Hint*: you can just clone [angular2-quickstart](https://github.com/valor-software/angular2-quickstart)

If you are following [Angular2 5 min quickstart guide](https://angular.io/docs/ts/latest/quickstart.html), just add one line
```html
<!-- index.html -->
<script src="node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
```

Add Ng2BootstrapModule as imported module in your application module `app.module.ts`

```ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, Ng2BootstrapModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

And update your `app.component.ts` to have following content:

```ts
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `<alert type="info">ng2-bootstrap hello world!</alert>`
})
export class AppComponent {
}
```

And you are ready to go! :)

<!--
## Components

- [x] Accordion
- [x] Alert
- [x] Buttons
- [x] Carousel
- [x] Collapse
- [+-] Datepicker (Datepicker popup not implemented)
- [x] Dropdown
- [x] Modal
- [x] Pagination
- [ ] Popover
- [x] Progressbar
- [x] Rating
- [x] Tabs
- [x] Timepicker
- [+-] Tooltip
- [x] Typeahead
-->

## API
Check demo for API [documentation](http://valor-software.github.io/ng2-bootstrap/)

## Contribution

Please read central `ng2` modules [readme](https://github.com/valor-software/ng2-plans) for details, plans and approach and welcome :)

## Credits
Crossbrowser testing sponsored by [Browser Stack](https://www.browserstack.com)
[<img src="https://camo.githubusercontent.com/a7b268f2785656ab3ca7b1cbb1633ee5affceb8f/68747470733a2f2f64677a6f7139623561736a67312e636c6f756466726f6e742e6e65742f70726f64756374696f6e2f696d616765732f6c61796f75742f6c6f676f2d6865616465722e706e67" alt="Browser Stack" height="31px" style="background: cornflowerblue;">](https://www.browserstack.com)
