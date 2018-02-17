import { Component, OnInit, OnDestroy, OnChanges , ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnChanges,OnDestroy {
  loading:boolean=false
  model={
    email:"",
    password:""
  }
  constructor(private _title:Title,private _meta:Meta) { }

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
