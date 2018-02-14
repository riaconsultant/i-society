import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

  constructor(private _http:HttpClient) { }

  getUsers(id){
    let url="";
    return this._http.get(url);
  }

  registerProfile(data){
    return this._http.post(environment.api_url+"/register",data);
  }
  
}
