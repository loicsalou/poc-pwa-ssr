import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvsDomainComponent } from './avs-domain.component';

const routes: Routes = [{ path: '', component: AvsDomainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvsDomainRoutingModule { }
