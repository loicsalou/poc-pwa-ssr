import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfDomainComponent } from './af-domain.component';

const routes: Routes = [{ path: '', component: AfDomainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfDomainRoutingModule { }
