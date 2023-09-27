import { NgModule } from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {RegistrationsComponent} from "./registrations/registrations.component";


const routes: Routes = [
  {path: '', component: AuthComponent, children:[
      {path: 'login', component: LoginComponent},
      {path: 'registrations', component: RegistrationsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule{}
