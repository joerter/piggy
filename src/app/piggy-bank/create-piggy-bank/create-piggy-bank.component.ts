import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PiggyBank } from '../piggy-bank.model';

@Component({
    selector: 'create-piggy-bank',
    templateUrl: './create-piggy-bank.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePiggyBankComponent implements OnInit {
    @Output() newPiggyBank = new EventEmitter<PiggyBank>();

    createPiggyBankForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    onSubmit() {
        const formValue = this.createPiggyBankForm.value;

        const piggyBank: PiggyBank = {
            name: formValue.name,
            amount: formValue.amount,
            goal: formValue.goal
        };

        this.newPiggyBank.emit(piggyBank);

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
