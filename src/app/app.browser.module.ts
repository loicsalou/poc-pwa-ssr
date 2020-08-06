import {NgModule} from '@angular/core';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ObHttpApiInterceptor} from '@oblique/oblique';

@NgModule({
            imports: [
              AppModule,
              BrowserModule.withServerTransition({appId: 'angular-starter'}),
              BrowserTransferStateModule,
              ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
            ],
            providers: [
              {provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true}
            ],
            bootstrap: [AppComponent]
          })
export class AppBrowserModule {
}
