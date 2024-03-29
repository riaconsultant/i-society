import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class AuthService {

  constructor(private _http:HttpClient) { }

  getAuthValid(){
    let data={};
    this.loginService(data).subscribe((result:any)=>{
      console.log("Result",result);
    },(error:HttpErrorResponse)=>{
      console.log("Error",error.error);
    });
  }
  
  loginService(data){
    return this._http.post(environment.api_url+"login",data);
  }
  logoutService(data){
    return this._http.get(environment.api_url+"logout");
  }

}
