import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BudgetItem } from '../budget-item.model';

@Component({
    selector: 'app-add-budget-item',
    template: `
    <form [formGroup]="addIncomeForm" (ngSubmit)="onSubmit()" novalidate class="form-inline">
        <input type="text" class="form-control mr-2" placeholder="Name" formControlName="name" />
        <input type="number" class="form-control mr-2" placeholder="Amount" formControlName="amount" />

        <button type="submit" class="btn btn-secondary">Add</button>
    </form>
  `,
    styles: []
})
export class AddBudgetItemComponent implements OnInit {
    addIncomeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    onSubmit() {
        const formValue = this.addIncomeForm.value;
        const incomeItem: BudgetItem = {
            name: formValue.name,
            amount: formValue.amount
        };

        this.addIncomeForm.reset();
    }
    
    private createForm() {
        this.addIncomeForm = this.fb.group({
            name: ['', Validators.required],
            amount: ['', Validators.required]
        });
    }
}
