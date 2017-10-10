import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiggyBankListComponent } from './piggy-bank-list.component';

describe('PiggyBankListComponent', () => {
  let component: PiggyBankListComponent;
  let fixture: ComponentFixture<PiggyBankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiggyBankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiggyBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
