import { CREATE_PIGGY_BANK } from "../piggy-bank.reducer";
import { CreatePiggyBankComponent } from "./create-piggy-bank.component";
import { PiggyBank } from "../piggy-bank.model";
import { Validators } from "@angular/forms";

describe('Create Piggy Bank Component', () => {
    let component: CreatePiggyBankComponent;

    const formBuilderSpy = jasmine.createSpyObj('formBuilder', ['group']);
    const storeSpy = jasmine.createSpyObj('store', ['dispatch']);

    beforeEach(() => {
        component = new CreatePiggyBankComponent(formBuilderSpy, storeSpy);
    });

    describe('ngOnInit', () => {
        it('should create the form', () => {
            component.ngOnInit();

            expect(formBuilderSpy.group).toHaveBeenCalledWith({
                name: ['', Validators.required],
                amount: ['', Validators.required],
                goal: ''
            })
        });
    });

    describe('onSubmit', () => {
        const formValue = {
            name: 'New Car',
            amount: 1234.56,
            goal: 123456.78
        }
        beforeEach(() => {
            component.createPiggyBankForm = <any>{
                value: formValue,
                reset: jasmine.createSpy('reset')
            }
        });

        it('should reset the form', () => {
            component.onSubmit();

            expect(component.createPiggyBankForm.reset).toHaveBeenCalledTimes(1);
        });

        it('should dispatch a CREATE_PIGGY_BANK action with a piggybank payload', () => {
            component.onSubmit();

            const payload: PiggyBank = {
                name: formValue.name,
                amount: formValue.amount,
                goal: formValue.goal
            };
            const expectedAction = {
                type: CREATE_PIGGY_BANK,
                payload
            };

            expect(storeSpy.dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});
