import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {userModel} from '../model/userModel';
@Injectable()
export class UserServiceService {
  serviceUrl = "http://localhost:3000/user";
  constructor(private http : HttpClient) {}
  getUserDetail():Observable<userModel>{
    return this.http.get<userModel>(this.serviceUrl);
  }
  
}
