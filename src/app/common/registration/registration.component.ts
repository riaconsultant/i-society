import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit,OnDestroy {
  model:User

  constructor() { }

  ngOnInit() {
    this.model = new User();
  }
  ngOnChanges(){

  }
  ngOnDestroy(){

  }
  registerMe(form:NgForm){
    console.log("Register form data",form);
    
  }

}
