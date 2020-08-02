import {NgModule} from '@angular/core';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';

@NgModule({
            imports: [
              AppModule,
              BrowserModule.withServerTransition({appId: 'angular-starter'}),
              BrowserTransferStateModule
            ],
            bootstrap: [AppComponent]
          })
export class AppBrowserModule {
}
