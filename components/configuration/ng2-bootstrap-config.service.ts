import { Injectable, Optional } from '@angular/core';

export enum Ng2BootstrapTheme {BS3 = 1, BS4 = 2}

export class Ng2BootstrapConfig {
  public v:'bs3'|'bs4' = 'bs3';
}

@Injectable()
export class Ng2BootstrapConfigService {
  // this is to allow the enum to be accessed in templates
  public readonly themes:typeof Ng2BootstrapTheme = Ng2BootstrapTheme;

  public theme:Ng2BootstrapTheme = Ng2BootstrapTheme.BS3;

  public constructor(@Optional() config:Ng2BootstrapConfig) {
    if (config) {
      switch (config.v) {
        case 'bs3':
          this.theme = Ng2BootstrapTheme.BS3;
          break;
        case 'bs4':
          this.theme = Ng2BootstrapTheme.BS4;
          break;
        default:
          this.theme = Ng2BootstrapTheme.BS3;
          break;
      }
    }
  }
}
