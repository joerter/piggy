import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetItemComponent } from './add-budget-item.component';

describe('AddBudgetItemComponent', () => {
  let component: AddBudgetItemComponent;
  let fixture: ComponentFixture<AddBudgetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBudgetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBudgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
