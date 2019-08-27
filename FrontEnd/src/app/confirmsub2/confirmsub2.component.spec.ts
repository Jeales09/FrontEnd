import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmsub2Component } from './confirmsub2.component';

describe('Confirmsub2Component', () => {
  let component: Confirmsub2Component;
  let fixture: ComponentFixture<Confirmsub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Confirmsub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmsub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
