import { Component, OnInit, Input } from '@angular/core';
import {CartService} from '../service/cart-service.service';
@Component({
  selector: 'app-cardsforslider',
  templateUrl: './cardsforslider.component.html',
  styleUrls: ['./cardsforslider.component.scss']
})
export class CardsforsliderComponent implements OnInit {
  @Input()
  cardData:any[];
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

}
