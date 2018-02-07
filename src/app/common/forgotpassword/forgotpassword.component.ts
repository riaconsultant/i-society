import { Component, OnInit,ChangeDetectionStrategy,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ForgotpasswordComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(){

  }

  forgotFormSubmit(form:NgForm){
    console.log(form.value);
  }

}
