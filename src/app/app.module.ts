import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {UserServiceService} from './service/user-service.service';
import {CheckoutService} from './service/checkout-service.service';
import {UriList} from './url';
import {ApiUtils} from './api-utils';
import {CartService} from './service/cart-service.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Slider} from './shared/components/slider.component';
import {MenuItems} from './shared/components/menuitems.component';
//import {ProductSlider} from './shared/components/product-slider.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterComponent } from './filter/filter.component';
import { CardsforsliderComponent } from './cardsforslider/cardsforslider.component';
import { SuggetionSliderComponent } from './suggetion-slider/suggetion-slider.component';
import { IncdecComponent } from './shared/components/incdec.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthnticationComponent } from './authntication/authntication.component';
import { OrderConfirmatonComponent } from './order-confirmaton/order-confirmaton.component';
import { AddressComponent } from './address/address.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { ButtonActionComponent } from './button-action/button-action.component';
import { CalculatePriceComponent } from './calculate-price/calculate-price.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeAdminComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    FilterComponent,
    Slider,
    MenuItems,
   // ProductSlider,
    CardsforsliderComponent,
   SuggetionSliderComponent,
   IncdecComponent,
   CartDetailComponent,
   CheckoutComponent,
   AuthnticationComponent,
   OrderConfirmatonComponent,
   AddressComponent,
   ShippingComponent,
   BillingComponent,
   PaymentComponent,
   OrderComponent,
   ButtonActionComponent,
   CalculatePriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserServiceService, CartService, CheckoutService, UriList, ApiUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
