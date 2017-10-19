import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BudgetItem } from './../budget-item.model';

@Component({
    selector: 'budget-item-list',
    template: `
    <div class="card mb-2" *ngIf="budgetItems.length > 0">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" *ngFor="let budgetItem of budgetItems">
                {{budgetItem.name}} - {{budgetItem.amount}}
            </li>
        </ul>
    </div>
  `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetItemListComponent implements OnInit {
    @Input() budgetItems: BudgetItem[];

    constructor() {}

    ngOnInit() {}
}
