import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { environment } from '../environments/environment';
import * as user from './common/index';
import * as layout from './layout/index';
import * as services from './service/index';
import { AuthGuard } from './auth.guard';
import { AppRoute } from './app.route';
import { UserComponent } from './profile/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ...layout.layoutContainer,
    ...user.usrContainer,
    UserComponent
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
