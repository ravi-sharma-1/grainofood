import {Injectable} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
@Injectable()
export class ApiUtils{
    constructor(private http: HttpClient){
    }

    getApi<T>(url:string, data, subUrl:String): Observable<T>{
        let headers = new HttpHeaders(data); 
        return this.http.get<T>(url+'/'+subUrl, { headers: headers});
    }
    
    postApi<T>(url:string, data:Object, subUrl:String):Observable<T>{
         let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post<T>(url+'/'+subUrl, JSON.stringify(data),  { headers: headers});
    }
}