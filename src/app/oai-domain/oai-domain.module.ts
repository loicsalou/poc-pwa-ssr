import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OaiDomainRoutingModule } from './oai-domain-routing.module';
import { OaiDomainComponent } from './oai-domain.component';


@NgModule({
  declarations: [OaiDomainComponent],
  imports: [
    CommonModule,
    OaiDomainRoutingModule
  ]
})
export class OaiDomainModule { }
