import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCsignupComponent } from './confirm-csignup.component';

describe('ConfirmCsignupComponent', () => {
  let component: ConfirmCsignupComponent;
  let fixture: ComponentFixture<ConfirmCsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
