import { BudgetItem, BudgetItemType } from './budget-item.model';

import { ActionWithPayload } from '../action-with-payload.interface';
import { BudgetComponent } from './budget.component';
import { CREATE_BUDGET_ITEM } from './budget-item.reducer';
import { Observable } from 'rxjs';

describe('Budget Component', () => {
    const incomeItems = [
        {name: 'Job', amount: 123, type: BudgetItemType.Income},
        {name: 'Side Hustle', amount: 456, type: BudgetItemType.Income},
    ]
    const expenseItems = [
        {name: 'Car', amount: 456, type: BudgetItemType.Expense},
        {name: 'Apartment', amount: 456, type: BudgetItemType.Expense},
    ]
    const budgetItems: BudgetItem[] = [ ...incomeItems, ...expenseItems ]

    const storeSpy = jasmine.createSpyObj('store', ['select', 'dispatch']);
    storeSpy.select.and.returnValue(Observable.of(budgetItems));

    let component: BudgetComponent;

    beforeEach(() => {
        component = new BudgetComponent(storeSpy);
    });

    describe('ngOnInit', () => {
        it('should select the budget items', () => {
            component.ngOnInit();

            expect(storeSpy.select).toHaveBeenCalledTimes(1);
        });

        it('should map and filter income items', () => {
            component.ngOnInit();

            component.incomeItems$.subscribe(income => {
                expect(income.length).toBe(incomeItems.length);
                expect(income.every(i => i.type === BudgetItemType.Income)).toBe(true);
            })
        });

        it('should map and filter expense items', () => {
            component.ngOnInit();

            component.expenseItems$.subscribe(expenses => {
                expect(expenses.length).toBe(incomeItems.length);
                expect(expenses.every(i => i.type === BudgetItemType.Expense)).toBe(true);
            })
        });
    });

    describe('get totalIncome', () => {
        it('should sum the value of all income items', () => {
            component.incomeItems$ = Observable.of(incomeItems);
            const expected = incomeItems.reduce((sum, item) => sum + item.amount, 0);

            component.totalIncome.subscribe(result => {
                expect(result).toBe(expected);
            })
        });
    });

    describe('get totalExpenses', () => {
        it('should sum the value of all expenses', () => {
            component.expenseItems$ = Observable.of(expenseItems);
            const expected = expenseItems.reduce((sum, item) => sum + item.amount, 0);

            component.totalExpenses.subscribe(result => {
                expect(result).toBe(expected);
            })
        });
    });

    describe('handleIncomeItemAdded', () => {
        it('should dispatch a CREATE_BUDGET_ITEM with payload', () => {
            const budgetItem: BudgetItem = { name: 'Job', amount: 1111 };
            const incomeItem = { ...budgetItem, type: BudgetItemType.Income };
            const expected: ActionWithPayload<BudgetItem> = { type: CREATE_BUDGET_ITEM, payload: incomeItem };

            component.handleIncomeItemAdded(budgetItem);

            expect(storeSpy.dispatch).toHaveBeenCalledWith(expected);
        });
    });

    describe('handleExpenseItemAdded', () => {
        it('should dispatch a CREATE_BUDGET_ITEM with payload', () => {
            const budgetItem: BudgetItem = { name: 'Car', amount: 111 };
            const expenseItem = { ...budgetItem, type: BudgetItemType.Expense };
            const expected: ActionWithPayload<BudgetItem> = { type: CREATE_BUDGET_ITEM, payload: expenseItem };

            component.handleExpenseItemAdded(budgetItem);

            expect(storeSpy.dispatch).toHaveBeenCalledWith(expected);
        });
    });
});
