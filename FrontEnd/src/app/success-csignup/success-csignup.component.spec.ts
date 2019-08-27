import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCsignupComponent } from './success-csignup.component';

describe('SuccessCsignupComponent', () => {
  let component: SuccessCsignupComponent;
  let fixture: ComponentFixture<SuccessCsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessCsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessCsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
