import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseGoalComponent } from './expense-goal.component';

describe('ExpenseGoalComponent', () => {
  let component: ExpenseGoalComponent;
  let fixture: ComponentFixture<ExpenseGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
