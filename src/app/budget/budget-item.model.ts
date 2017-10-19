export interface BudgetItem {
    name: string;
    amount: number;
    type?: BudgetItemType
}

export enum BudgetItemType {
    Income = 'income',
    Expense = 'expense'
}
