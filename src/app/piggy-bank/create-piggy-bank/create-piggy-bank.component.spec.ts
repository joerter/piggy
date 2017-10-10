import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePiggyBankComponent } from './create-piggy-bank.component';

describe('CreatePiggyBankComponent', () => {
  let component: CreatePiggyBankComponent;
  let fixture: ComponentFixture<CreatePiggyBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePiggyBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePiggyBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
