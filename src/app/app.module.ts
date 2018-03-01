import { BrowserModule,Title,Meta,MetaDefinition } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { environment } from '../environments/environment';
// import * as user from './common/index';
// import * as layout from './layout/index';
import * as services from './service/index';
import { LoginComponent } from './common/login/login.component';
import { RegistrationComponent } from './common/registration/registration.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { ForgotpasswordComponent } from './common/forgotpassword/forgotpassword.component';
import { AuthGuard } from './auth.guard';
import { AppRoute } from './app.route';
import { ChangepasswordComponent } from './common/changepassword/changepassword.component';
import { ResetpasswordComponent } from './common/resetpassword/resetpassword.component';
import { NavigationComponent } from './common/navigation/navigation.component';
// import { UserComponent } from './profile/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ResetpasswordComponent,
    NavigationComponent,
    //...layout.layoutContainer,
    //...user.usrContainer,
    //UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ ...services.serviceContainer,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
