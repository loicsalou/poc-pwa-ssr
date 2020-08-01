import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'af', loadChildren: () => import('./af-domain/af-domain.module').then(m => m.AfDomainModule)},
  {path: 'avs', loadChildren: () => import('./avs-domain/avs-domain.module').then(m => m.AvsDomainModule)},
  {path: 'oai', loadChildren: () => import('./oai-domain/oai-domain.module').then(m => m.OaiDomainModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
            imports: [RouterModule.forRoot(routes, {
              initialNavigation: 'enabled'
            })],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
