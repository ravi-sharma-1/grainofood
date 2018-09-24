import { Component, OnInit, AfterViewInit} from '@angular/core';
// import * as $ from 'jquery';
declare var $ : any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }
  otherOptions:Array<Object>;
  ngOnInit() {
    this.otherOptions=[{url:"../../../assets/v1.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
      {url:"../../../assets/v2.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
    {url:"../../../assets/v3.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
    {url:"../../../assets/v4.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
    {url:"../../../assets/v5.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
    {url:"../../../assets/v4.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
    {url:"../../../assets/v5.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"}
   ]
  }

  ngAfterViewInit(){
    $('#zoom_01').elevateZoom();
  }

}
