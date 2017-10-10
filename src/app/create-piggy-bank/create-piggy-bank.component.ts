import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-piggy-bank',
  template: `
    <form [formGroup]="createPiggyBankForm" novalidate (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" formControlName="name" />
      </div>

      <div class="form-group">
        <label for="amount">Starting Amount</label>
        <input type="number" class="form-control" formControlName="startingAmount" />
      </div>

      <div class="form-group">
        <label for="goal">Goal (optional)</label>
        <input type="number" class="form-control" formControlName="goal" />
      </div>

      <button type="submit" class="btn btn-primary">Create</button>
    </form>

    {{createPiggyBankForm.value | json}}
    {{createPiggyBankForm.status | json}}
  `,
  styles: []
})
export class CreatePiggyBankComponent implements OnInit {

  createPiggyBankForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    console.log(this.createPiggyBankForm.value);
  }

  private createForm() {
    this.createPiggyBankForm = this.fb.group({
      name: ['', Validators.required],
      startingAmount: ['', Validators.required],
      goal: '' 
    })
  }

}
