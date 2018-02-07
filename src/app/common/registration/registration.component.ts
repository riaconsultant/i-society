import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit,OnChanges,OnDestroy {

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(){

  }
  ngOnDestroy(){

  }
  registerMe(form:NgForm){
    console.log("Register form data",form);
  }

}
