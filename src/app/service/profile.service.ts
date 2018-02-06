import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private _http:HttpClient) { }

  getUsers(id){
    let url="";
    return this._http.get(url);
  }

}
