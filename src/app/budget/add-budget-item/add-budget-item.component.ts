import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BudgetItem } from '../budget-item.model';

@Component({
    selector: 'add-budget-item',
    templateUrl: './add-budget-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBudgetItemComponent implements OnInit {
    addBudgetItemForm: FormGroup;
    @Output() itemAdded = new EventEmitter<BudgetItem>();

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    onSubmit() {
        const formValue = this.addBudgetItemForm.value;
        const incomeItem: BudgetItem = {
            name: formValue.name,
            amount: formValue.amount
        };

        this.itemAdded.emit(incomeItem);
        this.addBudgetItemForm.reset();
    }

    private createForm() {
        this.addBudgetItemForm = this.fb.group({
            name: ['', Validators.required],
            amount: ['', Validators.required]
        });
    }
}
