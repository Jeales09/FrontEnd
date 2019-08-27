import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmsub3Component } from './confirmsub3.component';

describe('Confirmsub3Component', () => {
  let component: Confirmsub3Component;
  let fixture: ComponentFixture<Confirmsub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Confirmsub3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirmsub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
