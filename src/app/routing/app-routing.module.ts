import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from '../pages/payment/payment.component';
import { DrinkSelectionComponent } from '../pages/drink-selection/drink-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/drink-selection', pathMatch: 'full' },
  {
    path: 'drink-selection',
    component: DrinkSelectionComponent,
    pathMatch: 'full',
  },
  { path: 'payment', component: PaymentComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
