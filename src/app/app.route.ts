import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';

import * as common from './common/index';
//import * as profile from './profile/index';
import * as services from './service/index';
import { AuthGuard } from './auth.guard';
import { RouterModule,Routes, PreloadAllModules } from '@angular/router';
import { UserResolverService } from './service/user-resolver.service';

const appRoute:Routes=[  
  {path:"login", component:common.LoginComponent},
  {path:"register", component:common.RegistrationComponent},
  {path:"forgotpassword", component:common.ForgotpasswordComponent},
  //{path:"profile",component:profile.UserComponent,data:{ preload:false},resolve:{users:UserResolverService}},
  { path:"landing", loadChildren:'./landing/landing.module#LandingModule'},
  {path:'',redirectTo:'/landing',pathMatch:'full'},
  { path:"**", component:common.PagenotfoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute,{preloadingStrategy:PreloadAllModules})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoute { }
