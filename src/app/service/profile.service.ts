import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
//import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';

@Injectable()
export class ProfileService {
  profileData:any
  constructor(private _http:HttpClient) { }

  getUsers(id){
    let url="";
    return this._http.get(url);
  }

  registerProfile(data){
    // return this._http.post(environment.api_url+"user/signup",data)
    //                     .catch((error:HttpErrorResponse)=>{
    //                       if(error.error instanceof Error){
    //                         console.log("Error",error.error.message);
    //                       }
    //                       return Observable.of([
    //                         {name: "Default values returned by local error handling", id: 97},
    //                         {name: "Default values returned by local error handling(2)", id: 98},
    //                         {name: "Default values returned by local error handling(3)", id: 99}
    //                       ]);
    //                     });
  }

}
