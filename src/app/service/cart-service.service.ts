import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs';
import {cartModel} from "../model/cartModel";
Injectable()
export class CartService{
  cartModel$ = new Subject<cartModel>();
  cartData:cartModel={
    cartDetail:[]
  };
  addToCart(item){
    var itemNew = true;
    if(!this.cartData.cartDetail.length){
      this.cartData.cartDetail.push([item]);
      itemNew = false;
    }else{
      this.cartData.cartDetail.length && this.cartData.cartDetail.map((arrItem)=>{
        if(JSON.stringify(arrItem[0])==JSON.stringify(item)){
          arrItem.push(item);
          itemNew= false;
        }
      })
    }
    if(itemNew){
      this.cartData.cartDetail.push([item]);
    }
    this.getCartModel();
  }
  removeFromCart(index){
    this.cartData.cartDetail[index].length && this.cartData.cartDetail[index].pop();
    this.getCartModel();
  }

  completeRemove(index){
    this.cartData.cartDetail.splice(index,1);
    this.getCartModel();
  }
  emptyCart(){
    this.cartData.cartDetail=[];
    this.getCartModel();
  }
  getCartModel(){
      this.cartModel$.next(this.cartData);
  }
}