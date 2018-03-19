import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { BudgetItem, BudgetItemType } from './budget-item.model';
import { Component, OnInit } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

import { CREATE_BUDGET_ITEM } from './budget-item.reducer';
import { Observable } from 'rxjs';

@Component({
    selector: 'budget',
    templateUrl: './budget-component.html',
    styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
    expenseItems$: Observable<BudgetItem[]>;
    incomeItems$: Observable<BudgetItem[]>;

    constructor(private store: Store<any>) {}

    ngOnInit() {
        const budgetItems$ = this.store.select('budgetItem');
        this.incomeItems$ = budgetItems$.map(budgetItems => budgetItems.filter(b => b.type === BudgetItemType.Income));
        this.expenseItems$ = budgetItems$.map(budgetItems => budgetItems.filter(b => b.type === BudgetItemType.Expense));
    }

    get totalIncome(): Observable<number> {
        return this.incomeItems$.map(items => items.reduce((sum, item) => sum + item.amount, 0));
    }

    get totalExpenses(): Observable<number> {
        return this.expenseItems$.map(items => items.reduce((sum, item) => sum + item.amount, 0));
    }

    handleIncomeItemAdded(budgetItem: BudgetItem) {
        const payload = { ...budgetItem, type: BudgetItemType.Income };
        this.store.dispatch({ type: CREATE_BUDGET_ITEM, payload });
    }

    handleExpenseItemAdded(budgetItem: BudgetItem) {
        const payload = { ...budgetItem, type: BudgetItemType.Expense };
        this.store.dispatch({ type: CREATE_BUDGET_ITEM, payload });
    }
}
