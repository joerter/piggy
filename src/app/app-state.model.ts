import { BudgetItem } from "./budget/budget-item.model";
import { PiggyBank } from "./piggy-bank/piggy-bank.model";

export interface AppState {
    piggyBanks: PiggyBank[];
    budgetItems: BudgetItem[];
}
