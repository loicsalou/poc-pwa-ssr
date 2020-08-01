import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfDomainComponent } from './af-domain.component';

describe('AfDomainComponent', () => {
  let component: AfDomainComponent;
  let fixture: ComponentFixture<AfDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
