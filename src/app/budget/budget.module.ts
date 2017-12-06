import { AddBudgetItemComponent } from './add-budget-item/add-budget-item.component';
import { BudgetComponent } from './budget.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { budgetItemReducer } from './budget-item.reducer';

const COMPONENTS = [
    BudgetComponent,
    AddBudgetItemComponent,
    BudgetItemListComponent
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature('budgetItem', budgetItemReducer)
    ],
    declarations: [COMPONENTS],
    exports: [COMPONENTS]
})
export class BudgetModule { }
