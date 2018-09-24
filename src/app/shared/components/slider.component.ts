import {Component,  Input, OnInit, AfterViewInit, ElementRef, Renderer} from "@angular/core";
import {AnimationBuilder, animate, style} from "@angular/animations";
import * as $ from 'jquery';
@Component({
  selector:'app-slider',
  styles:[`
  .jqSlider a.next,a.prev {
       position: absolute;
       margin-top: 7%;
       z-index:100;
       cursor: pointer;
       color: black;
       width: 17px;
       height: 47px;
       border-radius: 5px;
   }
   .jqSlider a.next{
       margin-left:-40px;
   }

   .jqSlider a.next i{
       position:relative;
       top:10px;
       left:-5px;
       font-size:30px;
   }
   
   .jqSlider a.prev i{
    position:relative;
    left:-5px;
    top:10px;
    font-size:30px;
   }

   .jqSlider a.prev{
       margin-left:10px;
   }

  .jqSlider ul {
       white-space: nowrap;
       display: inline-block;
       width: 99.2%;
       overflow-x: hidden;
       -webkit-margin-before: 0em;
       -webkit-margin-after: 0em;
       -webkit-margin-start: 0px;
       -webkit-margin-end: 0px;
       -webkit-padding-start: 0px;
   }

   .jqSlider p.bld{
       font-weight:bold;
       text-align:center;
       text-transform:uppercase;
       color:#9d9090;
   }

   .jqSlider span.bld{
      font-weight:bold;
      text-align:center;
      font-size:18px;
      display:block;
      text-transform:uppercase;
      color:#c26969;
   }

   .jqSlider ul li {
       list-style-type: none;
       display: inline-block;
   }
   .jqSlider ul{
       -moz-transition: all 500ms ease;
       -o-transition: all 500ms ease;
       -webkit-transition: all 500ms ease;
       transition: all 500ms ease;
   }`],
  template:`<div id="myJqSlider" class="jqSlider">
    <a class="prev"><i class="material-icons">
    chevron_left
    </i></a>
    <ul>
        <li>   
          <ng-content></ng-content>
        </li>
    </ul>
    <a class="next"><i class="material-icons">
    chevron_right
    </i></a>
</div>`
})
export class Slider{
  @Input() options:any;
  constructor(public el:ElementRef, public render:Renderer, public anb:AnimationBuilder){
  }
//   loaderAnimation= this.anb.build([
//       style({'opacity':0}),
//       animate(1000, style({'opacity':100}))
//   ]);
  initSlider(){
    var listItems = this.el.nativeElement.querySelectorAll('ul li');
    var prev = this.el.nativeElement.querySelector('.prev');
    var next = this.el.nativeElement.querySelector('.next');
    var ulItems = this.el.nativeElement.querySelector("ul");
    var itemShift = 0;
    ulItems.scrollLeft = 0;
    console.log(ulItems.scrollLeft)
    console.log(this.render);
    this.render.listen(prev, "click", (ev)=>{
        itemShift = itemShift - 300;
        ulItems.scrollLeft = itemShift;
        $(ulItems).animate({scrollLeft:itemShift}, 500, 'swing');
    });
    this.render.listen(next, "click", (ev)=>{
        itemShift = itemShift + 300;
        ulItems.scrollLeft = itemShift;
        $(ulItems).animate({scrollLeft:itemShift}, 500, 'swing');
        // var loaderFadeOutAnimationPlayer = this.loaderAnimation.create(ulItems);
        // loaderFadeOutAnimationPlayer.play();
        
     });
  }
  ngAfterViewInit(){
    this.initSlider();
  }
}