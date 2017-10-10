import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { PiggyBank } from './../piggy-bank.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'piggy-bank-list',
    template: `
        <ul>
            <li *ngFor="let piggyBank of piggyBanks$ | async">
                {{piggyBank.name}}
            </li>
        </ul>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PiggyBankListComponent implements OnInit {
    piggyBanks$: Observable<PiggyBank>;

    constructor(private store: Store<any>) {}

    ngOnInit() {
        this.piggyBanks$ = this.store.select('piggyBankReducer');
    }
}
