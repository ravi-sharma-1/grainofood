import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {billingModel} from '../model/billingModel';
import {addressModel} from '../model/addressModel';
import {shippingModel} from '../model/shippingModel';
import {paymentModel} from '../model/paymentModel';
import {UriList} from '../url';
import {ApiUtils} from '../api-utils';
@Injectable()
export class CheckoutService{
   constructor(private http: HttpClient, private url:UriList, private api:ApiUtils){
   }

   sendAddressModel(data:Object):Observable<addressModel>{//declaration
        return this.api.postApi<addressModel>(this.url.getUrlList().USER, data, 'address');
   }

   sendShippingModel(data:Object):Observable<shippingModel>{
        return this.api.postApi<shippingModel>(this.url.getUrlList().USER, data, 'shipping');
   }

   sendBillingModel(data:Object):Observable<billingModel>{
       return this.api.postApi<billingModel>(this.url.getUrlList().USER, data, 'billing');
   }

   sendPaymentModel(data:Object):Observable<paymentModel>{
      return this.api.postApi<paymentModel>(this.url.getUrlList().USER, data, 'payment');
   }

   getAddressModel(data:Object):Observable<addressModel>{//declaration
       return this.api.getApi<addressModel>(this.url.getUrlList().USER, data, 'address');
   }

   getShippingModel(data:Object):Observable<shippingModel>{
    return this.api.getApi<shippingModel>(this.url.getUrlList().USER, data, 'shipping');
   }

   getBillingModel(data:Object):Observable<billingModel>{
        return this.api.getApi<billingModel>(this.url.getUrlList().USER, data, 'billing');
   }
   
   getPaymentModel(data:Object):Observable<paymentModel>{
    return this.api.getApi<paymentModel>(this.url.getUrlList().USER, data, 'payment');
   }
}