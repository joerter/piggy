import { AddBudgetItemComponent } from "./add-budget-item.component";
import { BudgetItem } from "../budget-item.model";
import { Validators } from '@angular/forms';

describe('Add Budget Item Component', () => {
    let component: AddBudgetItemComponent;

    const formBuilderSpy = jasmine.createSpyObj('formBuilder', ['group']);

    beforeEach(() => {
        component = new AddBudgetItemComponent(formBuilderSpy);
    });

    describe('ngOnInit', () => {
        it('should create the form', () => {
            component.ngOnInit();

            expect(formBuilderSpy.group).toHaveBeenCalledWith({
                name: ['', Validators.required],
                amount: ['', Validators.required]
            });
        });
    });

    describe('onSubmit', () => {
        const formValue = { name: 'Gas', amount: 1222 };

        beforeEach(() => {
            component.addBudgetItemForm = <any> {
                value: formValue,
                reset: jasmine.createSpy('reset')
            }
        });

        it('should reset the form', () => {
            component.onSubmit();

            expect(component.addBudgetItemForm.reset).toHaveBeenCalledTimes(1);
        });

        it('should emit a budget item', () => {
            component.itemAdded = jasmine.createSpyObj('itemAdded', ['emit']);
            const incomeItem: BudgetItem = {
                name: formValue.name,
                amount: formValue.amount
            };

            component.onSubmit();

            expect(component.itemAdded.emit).toHaveBeenCalledWith(incomeItem);
        });
    });
});
