import { Component, OnInit, AfterViewInit,ElementRef, Renderer } from '@angular/core';
import {CartService} from '../service/cart-service.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  cartData:any;
  totalItems:any;
  actualData:any;
  constructor(private cartService:CartService, private el:ElementRef, private render:Renderer) { }

  ngAfterViewInit() {
    this.cartService.cartModel$.subscribe((data)=>{
       this.cartData = data;
       this.totalItems=0;
       this.cartData.cartDetail && this.cartData.cartDetail.map((items)=>{
          if(Array.isArray(items)){
            this.totalItems+=items.length;
          }
       });
       //$('.dropdown.open').addClass('open');
    });
  }

  handleOutputData(ev){
    let num= ev[0], obj=ev[1], totalRep= 0, allIndex={};
    this.cartData.cartDetail.length && this.cartData.cartDetail.map((items)=>{
        items.map((subItems, index)=>{
          if(subItems.id==obj.id){
            totalRep++;
            allIndex[index]= "";
          }
        });
   
    });
    let cond= num>totalRep?"add":"del";
    let loopConst= cond=="add" && num-totalRep || cond=="del" && totalRep-num;
    while(loopConst){
      if(cond=="add"){
        this.cartService.addToCart(obj);
      }else{
        let index= Object.keys(allIndex);
        this.cartService.removeFromCart(index[0]);
        delete allIndex[index[0]];
      }
      loopConst--;
    }
  }

  checkIfArray(inputItem){
     return Array.isArray(inputItem);
  }

  findTotal(){
    var total=0;
    this.cartData && this.cartData.cartDetail.map((item)=>{
      if(Array.isArray(item)){
        total+= parseInt(item[0].price)*item.length;
      }else{
        total+=parseInt(item.price);
      }
    });
    return total;
  }

  removeFromCart(index, obj){
    console.log(index, obj, this.actualData.cartDetail, this.cartData)
  }

}
