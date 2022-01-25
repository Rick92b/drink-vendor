import { Component, OnInit } from '@angular/core';
import { DrinkModel } from '../../models/drink.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink-selection',
  templateUrl: './drink-selection.component.html',
  styleUrls: ['./drink-selection.component.css'],
})
export class DrinkSelectionComponent implements OnInit {
  drinks$: Observable<DrinkModel[]>;

  constructor(
    private store: Store<{ drinks: DrinkModel[] }>,
    private router: Router
  ) {
    this.drinks$ = store.select('drinks');
  }

  ngOnInit(): void {}

  goToPaymentPage(): void {
    this.router.navigate(['payment']);
  }
}
