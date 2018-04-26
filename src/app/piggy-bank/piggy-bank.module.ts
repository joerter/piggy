import { CommonModule } from '@angular/common';
import { CreatePiggyBankComponent } from './create-piggy-bank/create-piggy-bank.component';
import { NgModule } from '@angular/core';
import { PiggyBankComponent } from './piggy-bank.component';
import { PiggyBankListComponent } from './piggy-bank-list/piggy-bank-list.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
    PiggyBankComponent,
    CreatePiggyBankComponent,
    PiggyBankListComponent
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class PiggyBankModule { }
