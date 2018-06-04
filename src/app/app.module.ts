import { BrowserModule,Title,Meta,MetaDefinition } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LayoutModule } from "@angular/cdk/layout";
import { environment } from '../environments/environment';
// import * as user from './common/index';
// import * as layout from './layout/index';
import * as services from './service';
import * as common from './common';
import { AuthGuard } from './auth.guard';
import { AppRoute } from './app.route';

// import { UserComponent } from './profile/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ...common.commonContainer
  ],
  imports: [
    BrowserModule,
    AppRoute,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ ...services.serviceContainer,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
