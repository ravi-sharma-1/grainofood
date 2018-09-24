import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {AuthnticationComponent} from './authntication/authntication.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {OrderConfirmatonComponent} from './order-confirmaton/order-confirmaton.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'product/viewCart',  component: CartDetailComponent },
  { path: 'product/checkout',  component: CheckoutComponent },
  { path: 'product/orderConfirmation',  component: OrderConfirmatonComponent },
  { path: 'product/:id', component: DetailComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'auth',   component: AuthnticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
