import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreatePiggyBankComponent } from './create-piggy-bank/create-piggy-bank.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatePiggyBankComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
