import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: any={};
  cardDetails: any={};
  genericCardKeys:string[]=[];
  constructor() { }
 
  ngOnInit() {
    this.cardDetails={
      "fruits":{
        title:"Fresh Arrivals",
        data:[{id:1,url:"../../../assets/f1.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
              {id:2, url:"../../../assets/f2.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
              {id:3,url:"../../../assets/f3.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
              {id:4, url:"../../../assets/f4.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
              {id:5, url:"../../../assets/f5.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"}
    ]},
      "vegitables":{
        title:"Fresh Vegitables",
        data:[{id:100,url:"../../../assets/v1.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
           {id:101, url:"../../../assets/v2.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
          {id:102, url:"../../../assets/v3.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
          {id:103, url:"../../../assets/v4.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
          {id:104, url:"../../../assets/v5.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"}
    ]},
      "grains":{
        title:"Farm Grains",
        data:[{id:201, url:"../../../assets/g1.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
      {id:202, url:"../../../assets/g2.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
      {id:203, url:"../../../assets/g3.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
      {id:204, url:"../../../assets/g4.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"},
      {id:205, url:"../../../assets/g5.jpg", type:"NEW", discount:"15%", descriptionTitle:"Fresh Hydarabadi Mangos",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", quantity:"1KG/2KG/5KG", price:"50"}
    ]}
    }
    this.genericCardKeys = Object.keys(this.cardDetails);
  }

}
