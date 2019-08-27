import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseplanComponent } from './exerciseplan.component';

describe('ExerciseplanComponent', () => {
  let component: ExerciseplanComponent;
  let fixture: ComponentFixture<ExerciseplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
