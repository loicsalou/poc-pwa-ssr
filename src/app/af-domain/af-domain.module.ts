import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfDomainRoutingModule } from './af-domain-routing.module';
import { AfDomainComponent } from './af-domain.component';


@NgModule({
  declarations: [AfDomainComponent],
  imports: [
    CommonModule,
    AfDomainRoutingModule
  ]
})
export class AfDomainModule { }
