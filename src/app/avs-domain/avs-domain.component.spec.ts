import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvsDomainComponent } from './avs-domain.component';

describe('AvsDomainComponent', () => {
  let component: AvsDomainComponent;
  let fixture: ComponentFixture<AvsDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvsDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvsDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
