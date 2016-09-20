import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { Ng2BootstrapConfigService, Ng2BootstrapConfig } from './ng2-bootstrap-config.service';

@NgModule({
  providers: [Ng2BootstrapConfigService]
})
export class Ng2BootstrapConfigModule {

  public static forRoot(v:'bs3'|'bs4'='bs3'):ModuleWithProviders {
    return {
      ngModule: Ng2BootstrapConfigModule,
      providers: [
        {provide: Ng2BootstrapConfig, useValue: {v: v}}
      ]
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule:Ng2BootstrapConfigModule) {
    if (parentModule) {
      throw new Error('Ng2BootstrapConfigModule is already loaded. Import it in the AppModule only');
    }
  }
}
