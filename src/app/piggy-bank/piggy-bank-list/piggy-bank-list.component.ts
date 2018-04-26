import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { PiggyBank } from './../piggy-bank.model';

@Component({
    selector: 'piggy-bank-list',
    templateUrl: './piggy-bank-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PiggyBankListComponent {
    @Input() piggyBanks: PiggyBank[];
}
