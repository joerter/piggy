import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { PiggyBank } from './../piggy-bank.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'piggy-bank-list',
    template: `
        <div class="card" *ngFor="let piggyBank of piggyBanks$ | async">
            <h4 class="card-title text-center">{{piggyBank.name}}</h4>

            <h2 class="text-center">{{piggyBank.amount | currency:'USD':true}}</h2>

            <div class="progress" *ngIf="piggyBank.goal > 0">
                <div
                    class="progress-bar" 
                    role="progressbar"
                    [attr.aria-valuenow]="piggyBank.amount"
                    aria-valuemin="0"
                    [attr.aria-valuemax]="piggyBank.goal"
                    [style.width.%]="piggyBank.amount / piggyBank.goal * 100">
                </div>
            </div>
        </div>
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
