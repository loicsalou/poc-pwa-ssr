import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaiDomainComponent } from './oai-domain.component';

describe('OaiDomainComponent', () => {
  let component: OaiDomainComponent;
  let fixture: ComponentFixture<OaiDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaiDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaiDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
