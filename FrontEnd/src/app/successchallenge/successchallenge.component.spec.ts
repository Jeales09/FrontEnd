import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesschallengeComponent } from './successchallenge.component';

describe('SuccesschallengeComponent', () => {
  let component: SuccesschallengeComponent;
  let fixture: ComponentFixture<SuccesschallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesschallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesschallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
