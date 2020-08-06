import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {multiTranslateLoader, ObHttpApiInterceptor, ObMasterLayoutModule} from '@oblique/oblique';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
            declarations: [
              AppComponent,
              NotFoundComponent,
              HomePageComponent
            ],
            imports: [
              BrowserAnimationsModule,
              AppRoutingModule,
              HttpClientModule,
              ObMasterLayoutModule,
              TranslateModule.forRoot(multiTranslateLoader())
            ],
            providers: [
              {provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true}
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
