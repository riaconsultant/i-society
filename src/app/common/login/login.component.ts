import { Component, OnInit, OnDestroy, OnChanges , ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ProfileService, AuthService } from '../../service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnChanges,OnDestroy {
  loading:boolean=false
  loginSub: Subscription
  model={
    email:"",
    password:""
  }
  constructor(private _title:Title,private _meta:Meta,private _profile:ProfileService, private _auth:AuthService) { }

  ngOnInit() {
    this._title.setTitle("MySociety: Login");
    this._meta.addTag({name:"author",content:"Manoj Chaurasiya"});
    this._meta.addTags([
                      {name:"description",content:"Society Management Solution"},
                      {name:"keywords",content:"Angular4, Angular5, Society Management Solution"}
                    ]);
  }

  ngOnChanges(){

  }

  ngOnDestroy(){
    if(this.loginSub){
      this.loginSub.unsubscribe();
    }
  }
  

  loginMe(form:NgForm){
    this.loading = true;
    this.loginSub = this._auth.loginService(form.value).subscribe((result:any)=>{
      this.loading = false;
    },(error:HttpErrorResponse)=>{
      this.loading = false;
    })
    console.log(form.value);
  }
  socialLogin(arg:String){
    console.log(arg);
    if(arg=='g'){
      
    }
  }

}
