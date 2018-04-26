import { Component, OnInit } from '@angular/core';
import { PiggyBank } from './piggy-bank.model';

@Component({
    selector: 'piggy-bank',
    templateUrl: './piggy-bank.component.html'
})
export class PiggyBankComponent {
    piggyBanks: PiggyBank[] = [];

    handleNewPiggyBank(piggyBank: PiggyBank) {
        this.piggyBanks = [...this.piggyBanks, piggyBank];
    }
}
