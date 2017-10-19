import { AddBudgetItemComponent } from './budget/add-budget-item/add-budget-item.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BudgetComponent } from './budget/budget.component';
import { BudgetItemListComponent } from './budget/budget-item-list/budget-item-list.component';
import { CreatePiggyBankComponent } from './piggy-bank/create-piggy-bank/create-piggy-bank.component';
import { NgModule } from '@angular/core';
import { PiggyBankComponent } from './piggy-bank/piggy-bank.component';
import { PiggyBankListComponent } from './piggy-bank/piggy-bank-list/piggy-bank-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { budgetItemReducer } from './budget/budget-item.reducer';
import { piggyBankReducer } from './piggy-bank/piggy-bank.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PiggyBankComponent,
    CreatePiggyBankComponent,
    PiggyBankListComponent,
    BudgetComponent,
    AddBudgetItemComponent,
    BudgetItemListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ piggyBankReducer, budgetItemReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
