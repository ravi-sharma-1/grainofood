import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  @Input()
  userDetail
  constructor() { }

  ngOnInit() {
  }

}
