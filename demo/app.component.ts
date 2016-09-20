import { AfterContentInit, Component, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Ng2BootstrapConfigService, Ng2BootstrapTheme } from '../ng2-bootstrap';

let template = require('./demo.template.html');

@Component({
  selector: 'demo',
  template
})

export class DemoComponent implements AfterContentInit {
  public isBs3:boolean;
  private viewContainerRef:ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef, private router:Router, private config:Ng2BootstrapConfigService) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;

    let w:any = window;

    if (w && w.__theme === 'bs4') {
      config.theme = Ng2BootstrapTheme.BS4;
    }

    this.isBs3 = this.config.theme === Ng2BootstrapTheme.BS3;
  }

  public ngAfterContentInit():any {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        if (typeof PR !== 'undefined') {
          // google code-prettify
          setTimeout(PR.prettyPrint, 50);
        }
      }
    });
  }
}
