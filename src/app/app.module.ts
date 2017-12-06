import { AddBudgetItemComponent } from './budget/add-budget-item/add-budget-item.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BudgetComponent } from './budget/budget.component';
import { BudgetItemListComponent } from './budget/budget-item-list/budget-item-list.component';
import { BudgetModule } from './budget/budget.module';
import { NgModule } from '@angular/core';
import { PiggyBankModule } from './piggy-bank/piggy-bank.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { budgetItemReducer } from './budget/budget-item.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BudgetModule,
    PiggyBankModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
