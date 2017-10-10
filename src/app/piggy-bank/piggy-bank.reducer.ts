import { Action } from '@ngrx/store';
import { PiggyBank } from './piggy-bank.model';

export const CREATE_PIGGY_BANK = 'CREATE_PIGGY_BANK';

export interface ActionWithPayload<T> extends Action {
    payload: T;
}

export function piggyBankReducer(state = [], action: ActionWithPayload<PiggyBank>) {
    switch (action.type) {
        case CREATE_PIGGY_BANK:
            return [ action.payload, ...state ];
        default:
            return state;
    }
}