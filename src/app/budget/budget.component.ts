import { Component, OnInit } from '@angular/core';

import { BudgetItem } from './budget-item.model';
import { CREATE_BUDGET_ITEM } from './budget-item.reducer';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

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
    incomeItems$: Observable<BudgetItem>;

    constructor(private store: Store<any>) {}

    ngOnInit() {
        this.incomeItems$ = this.store.select('budgetItemReducer');
    }

    onIncomeItemAdded(incomeItem: BudgetItem) {
        this.store.dispatch({
            type: CREATE_BUDGET_ITEM,
            payload: incomeItem
        });
    }
}
