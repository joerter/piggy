import { BudgetItem, BudgetItemType } from './budget-item.model';
import { Component, OnInit } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

import { CREATE_BUDGET_ITEM } from './budget-item.reducer';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'budget',
    template: `
    <div class="row">
        <div class="col-md-6">
            <h2>Income</h2>

            <budget-item-list [budgetItems]="incomeItems$ | async"></budget-item-list>

            <div class="d-flex justify-content-center">
                <add-budget-item (itemAdded)="onIncomeItemAdded($event)"></add-budget-item>
            </div>
        </div>
        <div class="col-md-6">
            <h2>Expenses</h2>

            <budget-item-list [budgetItems]="expenseItems$ | async"></budget-item-list>

            <div class="d-flex justify-content-center">
                <add-budget-item (itemAdded)="onExpenseItemAdded($event)"></add-budget-item>
            </div>
        </div>
    </div>
  `,
    styles: [
        `h2 {
          text-align: center;
      }`
    ]
})
export class BudgetComponent implements OnInit {
    expenseItems$: Observable<BudgetItem[]> = Observable.of([]);
    incomeItems$: Observable<BudgetItem[]> = Observable.of([]);

    constructor(private store: Store<any>) {}

    ngOnInit() {
        const budgetItems$ = this.store.select('budgetItem');
        budgetItems$.subscribe(item => console.log(item));
        budgetItems$.filter(item => item.type === BudgetItemType.Expense);
        budgetItems$.filter(item => item.type === BudgetItemType.Income).subscribe((item) => {
            console.log(item);
        });
    }

    onIncomeItemAdded(budgetItem: BudgetItem) {
        const incomeItem = { ...budgetItem, type: BudgetItemType.Income };
        this.store.dispatch({
            type: CREATE_BUDGET_ITEM,
            payload: incomeItem
        });
    }

    onExpenseItemAdded(budgetItem: BudgetItem) {
        const expenseItem = { ...budgetItem, type: BudgetItemType.Expense };
        this.store.dispatch({
            type: CREATE_BUDGET_ITEM,
            payload: expenseItem
        });
    }
}
