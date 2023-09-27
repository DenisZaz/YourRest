import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { CommonModule } from "@angular/common";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../../Shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegistrationsComponent,
    AuthComponent
  ]
})

export class AuthModule {}

