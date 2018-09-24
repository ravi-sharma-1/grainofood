import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  console = console;
  userPlaceHolder = "Please enter user input";
  constructor(public router:Router){ 

  }
   /*Here we are initiallizing the control*/
   ngOnInit(){
    this.loginForm = new FormGroup({
      userName: new FormControl('', //this.customValidatorControl
      Validators.compose([Validators.required 
         //,Validators.minLength(3),
         //Validators.pattern('[\\w\\-\\s\\/]+')
       ])
     ),
      pwd: new FormControl('')
    });
   }
   /* This is custom the validator */
   customValidatorControl(control){
      console.log(control);
      if(control.value.length<3){
        return {'userName':true}
      }
     
   }
   /*This is the submit action*/
   submitLoginForm(value){
      this.router.navigateByUrl('/home'); 
   }

  

}
