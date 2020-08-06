import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {multiTranslateLoader} from '@oblique/oblique';
// import {TranslateModule} from '@ngx-translate/core';

// import {ObMasterLayoutModule} from '@oblique/oblique';

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
              //  ObMasterLayoutModule,
              // TranslateModule.forRoot(multiTranslateLoader())
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
