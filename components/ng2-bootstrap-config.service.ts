import { window } from './utils/facade/browser';
import { Injectable } from '@angular/core';

export enum Ng2BootstrapTheme {BS3 = 1, BS4 = 2}

@Injectable()
export class Ng2BootstrapConfigService {

  public static readonly themes:Ng2BootstrapTheme = Ng2BootstrapTheme;

  private static _theme:Ng2BootstrapTheme;

  public static get theme():Ng2BootstrapTheme {
    // hack as for now
    if (window.__theme === 'bs4') {
      return Ng2BootstrapTheme.BS4;
    }
    return (this._theme || Ng2BootstrapTheme.BS3);
  }

  public static set theme(v:Ng2BootstrapTheme) {
    this._theme = v;
  }
}
