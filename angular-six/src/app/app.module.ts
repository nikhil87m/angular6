import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewcmpComponent } from './newcmp/newcmp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcmpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:'new-cmp',
      component:NewcmpComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
