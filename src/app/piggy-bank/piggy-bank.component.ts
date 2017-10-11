import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'piggy-bank',
    template: `
      <piggy-bank-list></piggy-bank-list>

      <hr/>

      <create-piggy-bank></create-piggy-bank>
    ` 
})
export class PiggyBankComponent {}