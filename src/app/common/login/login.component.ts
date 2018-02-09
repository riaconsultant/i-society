import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit,OnDestroy {
  model={
    email:"",
    password:""
  }
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(){

  }
  

  loginMe(form:NgForm){
    console.log(form.value);
  }
  socialLogin(arg:String){
    console.log(arg);
    if(arg=='g'){
      
    }
  }

}
