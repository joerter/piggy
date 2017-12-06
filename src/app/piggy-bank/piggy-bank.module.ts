import { CommonModule } from '@angular/common';
import { CreatePiggyBankComponent } from './create-piggy-bank/create-piggy-bank.component';
import { NgModule } from '@angular/core';
import { PiggyBankComponent } from './piggy-bank.component';
import { PiggyBankListComponent } from './piggy-bank-list/piggy-bank-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { piggyBankReducer } from './piggy-bank.reducer';

const COMPONENTS = [
    PiggyBankComponent,
    CreatePiggyBankComponent,
    PiggyBankListComponent
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature('piggyBank', piggyBankReducer)],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class PiggyBankModule { }
