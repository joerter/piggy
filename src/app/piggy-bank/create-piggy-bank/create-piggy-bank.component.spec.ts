import { CREATE_PIGGY_BANK } from '../piggy-bank.reducer';
import { CreatePiggyBankComponent } from './create-piggy-bank.component';
import { PiggyBank } from '../piggy-bank.model';
import { Validators } from '@angular/forms';

describe('Create Piggy Bank Component', () => {
    let component: CreatePiggyBankComponent;

    let createdFormGroup: any;
    const formBuilderStub = <any>{
        group: (formGroup) => { createdFormGroup = formGroup; }
    };

    let emittedPiggyBank: PiggyBank;

    beforeEach(() => {
        createdFormGroup = undefined;

        component = new CreatePiggyBankComponent(formBuilderStub);
        component.newPiggyBank = <any>{
            emit: (piggyBank: PiggyBank) => { emittedPiggyBank = piggyBank; }
        };
    });

    describe('ngOnInit', () => {
        it('should create the form', () => {
            component.ngOnInit();

            expect(createdFormGroup).toEqual({
                name: ['', Validators.required],
                amount: ['', Validators.required],
                goal: ''
            });
        });
    });

    describe('onSubmit', () => {
        const formValue = {
            name: 'New Car',
            amount: 1234.56,
            goal: 123456.78
        };
        beforeEach(() => {
            component.createPiggyBankForm = <any>{
                value: formValue,
                reset: jasmine.createSpy('reset')
            };
        });

        it('should reset the form', () => {
            component.onSubmit();

            expect(component.createPiggyBankForm.reset).toHaveBeenCalledTimes(1);
        });

        it('should emit the created piggybank', () => {
            component.onSubmit();

            const piggyBank: PiggyBank = {
                name: formValue.name,
                amount: formValue.amount,
                goal: formValue.goal
            };

            expect(emittedPiggyBank).toEqual(piggyBank);
        });
    });
});
