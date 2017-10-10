import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CREATE_PIGGY_BANK } from '../piggy-bank.reducer';
import { PiggyBank } from '../piggy-bank.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'create-piggy-bank',
    template: `
    <form [formGroup]="createPiggyBankForm" novalidate (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" formControlName="name" />
      </div>

      <div class="form-group">
        <label for="amount">Starting Amount</label>
        <input type="number" class="form-control" formControlName="amount" />
      </div>

      <div class="form-group">
        <label for="goal">Goal (optional)</label>
        <input type="number" class="form-control" formControlName="goal" />
      </div>

      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePiggyBankComponent implements OnInit {
    createPiggyBankForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store<any>) {}

    ngOnInit() {
        this.createForm();
    }

    onSubmit() {
        const formValue = this.createPiggyBankForm.value;

        const piggyBank: PiggyBank = {
            name: formValue.name,
            amount: formValue.amount,
            goal: formValue.goal
        }

        this.store.dispatch({
            type: CREATE_PIGGY_BANK,
            payload: piggyBank
        });

        this.createPiggyBankForm.reset();
    }

    private createForm() {
        this.createPiggyBankForm = this.fb.group({
            name: ['', Validators.required],
            amount: ['', Validators.required],
            goal: ''
        });
    }
}
