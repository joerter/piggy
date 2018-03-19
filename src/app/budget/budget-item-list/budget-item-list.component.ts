import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BudgetItem } from './../budget-item.model';

@Component({
    selector: 'budget-item-list',
    templateUrl: './budget-item-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetItemListComponent implements OnInit {
    @Input() budgetItems: BudgetItem[];

    constructor() {}

    ngOnInit() {}
}
