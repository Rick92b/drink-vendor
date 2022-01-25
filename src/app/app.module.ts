import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { DrinkSelectionComponent } from './pages/drink-selection/drink-selection.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DrinkShowcaseComponent } from './pages/drink-selection/components/drink-showcase/drink-showcase.component';
import { ItemCartComponent } from './pages/drink-selection/components/item-cart/item-cart.component';
// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
//ngrx
import { StoreModule } from '@ngrx/store';
// reducers
import { drinkReducer } from './store/reducers/drink.reducer';
import { drinkOrderReducer } from './store/reducers/drink-order.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './shared/components/header/header.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DrinkSelectionComponent,
    PaymentComponent,
    DrinkShowcaseComponent,
    ItemCartComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatStepperModule,
    MatCheckboxModule,
    StoreModule.forRoot(
      {
        drinks: drinkReducer,
        drinkOrders: drinkOrderReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
