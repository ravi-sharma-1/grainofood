import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './service/user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userSrv: UserServiceService){
  }
  title = 'app title Ravcccci ddddwwww Allah jddjddjdjdjd';
  ngOnInit(){
    this.userSrv.getUserDetail().subscribe(function(resp){
      console.log(resp);
    });
  }
}
