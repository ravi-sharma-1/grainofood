import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckoutService } from '../service/checkout-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  currentTabs = 'ADD';
  constructor(private checkout: CheckoutService) { }
  userDetail;
  billingForm;
  shippingForm;
  paymentForm;
  orderForm;
  email;
  ngOnInit() {
    this.userDetail = new FormGroup({
      address: new FormGroup({
        fname: new FormControl('', Validators.compose([Validators.required])),
        lname: new FormControl('', Validators.compose([Validators.required])),
        email: new FormControl('', Validators.compose([Validators.required])),
        company: new FormControl('', Validators.compose([Validators.required])),
        addressA: new FormControl('', Validators.compose([Validators.required])),
        addressB: new FormControl('', Validators.compose([Validators.required])),
        city: new FormControl('', Validators.compose([Validators.required])),
        state: new FormControl('', Validators.compose([Validators.required])),
        pin: new FormControl('', Validators.compose([Validators.required])),
        country: new FormControl('', Validators.compose([Validators.required])),
        aInfo: new FormControl('', Validators.compose([Validators.required])),
        mobile: new FormControl('', Validators.compose([Validators.required])),
        atitle: new FormControl('', Validators.compose([Validators.required])),
      }),
      billing: new FormGroup({
        sameBilling: new FormControl(''),
        fname: new FormControl('', Validators.compose([Validators.required])),
        lname: new FormControl('', Validators.compose([Validators.required])),
        email: new FormControl('', Validators.compose([Validators.required])),
        company: new FormControl('', Validators.compose([Validators.required])),
        addressA: new FormControl('', Validators.compose([Validators.required])),
        addressB: new FormControl('', Validators.compose([Validators.required])),
        city: new FormControl('', Validators.compose([Validators.required])),
        state: new FormControl('', Validators.compose([Validators.required])),
        pin: new FormControl('', Validators.compose([Validators.required])),
        country: new FormControl('', Validators.compose([Validators.required])),
        aInfo: new FormControl('', Validators.compose([Validators.required])),
        mobile: new FormControl('', Validators.compose([Validators.required])),
        atitle: new FormControl('', Validators.compose([Validators.required]))
      }),
      shipping: new FormGroup({
        country: new FormControl('', Validators.compose([Validators.required])),
        state: new FormControl('', Validators.compose([Validators.required])),
        pin: new FormControl('', Validators.compose([Validators.required])),
        optionsRadios: new FormControl('', Validators.compose([Validators.required]))
      }),
      payment: new FormGroup({
        optionsA: new FormGroup({
          cod: new FormControl('', Validators.compose([Validators.required])),
          cOrder: new FormControl('', Validators.compose([Validators.required])),
          readCond: new FormControl('', Validators.compose([Validators.required]))
        }),
        optionsB: new FormGroup({
          paypal: new FormControl('', Validators.compose([Validators.required])),
          cOrder: new FormControl('', Validators.compose([Validators.required])),
          readCond: new FormControl('', Validators.compose([Validators.required]))
        }),
        optionsC: new FormGroup({
          cardnumber: new FormControl('', Validators.compose([Validators.required])),
          cname: new FormControl('', Validators.compose([Validators.required])),
          expiryM: new FormControl('', Validators.compose([Validators.required])),
          expiryY: new FormControl('', Validators.compose([Validators.required])),
          vcode: new FormControl('', Validators.compose([Validators.required])),
          sInfo: new FormControl('', Validators.compose([Validators.required]))
        })
      })
    });
  }

  validateFormData(formdata, type) {
    var isValid = false;
    switch (type) {
      case 'ADD':
        isValid = formdata.controls['address'].status == 'VALID' ? true : false;
        break;
      case 'BILL':
        isValid = formdata.controls['billing'].status == 'VALID' ? true : false;
        break;
      case 'SHIP':
        isValid = formdata.controls['shipping'].status == 'VALID' ? true : false;
        break;
      case 'PAYMENT':
        isValid = formdata.controls['payment'].status == 'VALID' ? true : false;
        break;
    }
    return isValid;
  }

  submitFormType(formdata, type) {
    if (this.validateFormData(formdata, type)) {
      switch (type) {
        case 'ADD':
          this.email = formdata.value['address'].email;
          this.checkout.sendAddressModel(formdata.value['address']).subscribe((data) => {
            console.log(data);
          });
          break;
        case 'BILL':
          this.checkout.sendBillingModel(formdata.value['billing']).subscribe((data) => {
            console.log(data);
          });
          break;
        case 'SHIP':
          this.email = formdata.value['address'].email;
          this.checkout.sendShippingModel(formdata.value['shipping']).subscribe((data) => {
            console.log(data);
          });
          break;
        case 'PAYMENT':
          this.email = formdata.value['address'].email;
          this.checkout.sendPaymentModel(formdata.value['payment']).subscribe((data) => {
            console.log(data);
          });
          break;

      }
    } else {
      alert('Invalid Form');
    }
  }

}
