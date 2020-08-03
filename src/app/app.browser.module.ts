import {NgModule} from '@angular/core';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
            imports: [
              AppModule,
              BrowserModule.withServerTransition({appId: 'angular-starter'}),
              BrowserTransferStateModule,
              ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
            ],
            bootstrap: [AppComponent]
          })
export class AppBrowserModule {
}
