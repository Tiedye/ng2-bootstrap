import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Ng2BootstrapConfigService, Ng2BootstrapTheme } from '../../../components/configuration/ng2-bootstrap-config.service';
import { routes } from './../../router.config';

// webpack html imports
let template = require('./main-menu.template.html');

@Component({
  selector: 'main-menu',
  template
})

export class MainMenuComponent {
  public isBs3:boolean;
  public routes:any = routes;
  public search:any = {};
  public hash:string = '';

  public constructor(private router:Router, private config:Ng2BootstrapConfigService) {
    this.isBs3 = config.theme === Ng2BootstrapTheme.BS3;
    this.routes = this.routes.filter((v:any) => v.path !== '**');
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.hash = event.url;
      }
    });
  }
}
