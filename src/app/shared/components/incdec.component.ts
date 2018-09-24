import {Component, Input, Output, EventEmitter} from '@angular/core';
declare var $: any;
@Component({
    selector:'app-inc-dec',
    styles:[`
    .qty {
        text-align: center;
        width:20px;
        float: left;
        height:28px;
        border:0px;
        border-radius:0px;
        margin-top:1px;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
    input.qtyplus {float: left;font-weight:bold;width:28px;}
    input.qtyminus {float: left;font-weight:bold;width:28px;}`],
    template:`<input type='button' (click)="incDecHandler('dec')" value='-' class='qtyminus' field='quantity' />
    <input type='number' (keyup)="handleUpdateFields($event)" name='quantity' value={{num}} class='qty' />
    <input type='button' value='+' (click)="incDecHandler('inc')" class='qtyplus' field='quantity' />`
})
export class IncdecComponent{
    @Input() num:number;
    @Input() data:any;
    @Input() maxLimit:number;
    @Input() minLimit:number;
    @Output() handleNumOut: EventEmitter<any>= new EventEmitter();
    constructor(){

    }
    handleUpdateFields(ev){
        var val= ev.target.value ? parseInt(ev.target.value):this.minLimit; 
        if(this.maxLimit && val<= this.maxLimit && val>this.minLimit){
            this.num= val;
            this.handleNumOut.emit([val, this.data]);
        }else{
            ev.target.value=this.minLimit;
            this.num=this.minLimit;
        }
    }
    incDecHandler(type){
        if(type==="inc" && (this.maxLimit && this.num<this.maxLimit)){
            this.num++;
        }else{
            this.num>this.minLimit ? this.num--:"";
        }
        this.handleNumOut.emit([this.num, this.data]);
        //$(".dropdown-menu").addClass("show");
    }

}