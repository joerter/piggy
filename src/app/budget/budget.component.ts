import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BudgetItem } from './budget-item.model';

@Component({
    selector: 'budget',
    template: `
    <div class="row">
        <div class="col-md-6">
            <h2>Income</h2>

            <div class="d-flex justify-content-center">
                <form [formGroup]="addIncomeForm" (ngSubmit)="onSubmit()" novalidate class="form-inline">
                    <input type="text" class="form-control mr-2" placeholder="Name" formControlName="name" />
                    <input type="number" class="form-control mr-2" placeholder="Amount" formControlName="amount" />

                    <button type="submit" class="btn btn-secondary">Add</button>
                </form>
            </div>
        </div>
        <div class="col-md-6">
            <h2>Expenses</h2>
        </div>
    </div>
  `,
    styles: [
        `h2 {
          text-align: center;
      }`
    ]
})
export class BudgetComponent implements OnInit {
    incomeItems: BudgetItem[] = [];
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

        this.incomeItems = [ ...this.incomeItems, incomeItem ];

        this.addIncomeForm.reset();
    }

    private createForm() {
        this.addIncomeForm = this.fb.group({
            name: ['', Validators.required],
            amount: ['', Validators.required]
        });
    }
}
