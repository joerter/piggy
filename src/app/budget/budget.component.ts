import { Component, OnInit } from '@angular/core';

import { BudgetItem } from './budget-item.model';

@Component({
    selector: 'budget',
    template: `
    <div class="row">
        <div class="col-md-6">
            <h2>Income</h2>

            <div class="card mb-2" *ngIf="incomeItems.length > 0">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" *ngFor="let incomeItem of incomeItems">
                        {{incomeItem.name}} - {{incomeItem.amount}}
                    </li>
                </ul>
            </div>

            <div class="d-flex justify-content-center">
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

    constructor() {}

    ngOnInit() {
    }
}
