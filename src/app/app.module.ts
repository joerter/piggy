import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreatePiggyBankComponent } from './piggy-bank/create-piggy-bank/create-piggy-bank.component';
import { NgModule } from '@angular/core';
import { PiggyBankComponent } from './piggy-bank/piggy-bank.component';
import { PiggyBankListComponent } from './piggy-bank/piggy-bank-list/piggy-bank-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { piggyBankReducer } from './piggy-bank/piggy-bank.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PiggyBankComponent,
    CreatePiggyBankComponent,
    PiggyBankListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ piggyBankReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
