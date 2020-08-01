import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvsDomainRoutingModule } from './avs-domain-routing.module';
import { AvsDomainComponent } from './avs-domain.component';


@NgModule({
  declarations: [AvsDomainComponent],
  imports: [
    CommonModule,
    AvsDomainRoutingModule
  ]
})
export class AvsDomainModule { }
