import { Action } from '@ngrx/store';
import { ActionWithPayload } from './../action-with-payload.interface';
import { BudgetItem } from './budget-item.model';

export const CREATE_BUDGET_ITEM = 'CREATE_BUDGET_ITEM';

export function budgetItemReducer(state = [], action: ActionWithPayload<BudgetItem>) {
    switch (action.type) {
        case CREATE_BUDGET_ITEM:
            return [ action.payload, ...state ];
        default:
            return state;
    }
}
