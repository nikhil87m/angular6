import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule1 } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { PageserviceService } from './pageservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ChangeTextDirective,
    SqrtPipe,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule1,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
