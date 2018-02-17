import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user';
import { ProfileService } from '../../service/profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit,OnChanges,OnDestroy {
  model:User
  registerSubs:Subscription;
  constructor(private profile:ProfileService) { }

  ngOnInit() {
    this.model = new User();
    console.log("Init");
  }
  ngOnChanges(){
    console.log("Changes");
  }
  ngOnDestroy(){
    if(this.registerSubs){
      this.registerSubs.unsubscribe();
      console.log("Destroy");
    }
  }
  registerMe(form:NgForm){
    console.log("Register form data",form);
    if(form.valid){
      this.registerSubs=this.profile.registerProfile(form.value).subscribe((result:any)=>{

      },(error:HttpErrorResponse)=>{
        let errData = error.error;
        console.log("HttpErrorResponse",error);
      })
    }
    
  }

}
