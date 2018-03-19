import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { PiggyBank } from './../piggy-bank.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'piggy-bank-list',
    templateUrl: './piggy-bank-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PiggyBankListComponent implements OnInit {
    piggyBanks$: Observable<PiggyBank>;

    constructor(private store: Store<any>) {}

    ngOnInit() {
        this.piggyBanks$ = this.store.select('piggyBank');
    }
}
