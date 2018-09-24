import {Component} from '@angular/core';
@Component({
    selector:"app-menuitems",
    template:`<div class="dropdown-menu">
      <ng-content></ng-content>
  </div>`,
    styles:[`
    .dropdown-menu
    {
        padding:0px;
    }
    .dropdown-menu:before {
        position: absolute;
        top: -7px;
        left: 9px;
        display: inline-block;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #fff;
        border-left: 7px solid transparent;
        border-bottom-color: #fff;
        content: '';
      }`]
})
export class MenuItems{
    constructor(){

    }
}