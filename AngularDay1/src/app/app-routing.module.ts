import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [{
  path: 'login',
component: LoginComponentComponent
},
{
  path: 'registration',
component: RegistrationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule1 { }
