import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreatePiggyBankComponent } from './piggy-bank/create-piggy-bank/create-piggy-bank.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { piggyBankReducer } from './piggy-bank/piggy-bank.reducer';
import { PiggyBankListComponent } from './piggy-bank/piggy-bank-list/piggy-bank-list.component';

@NgModule({
  declarations: [
    AppComponent,
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
