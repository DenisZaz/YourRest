import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./layouts/auth/auth.component";
import {SystemComponent} from "./layouts/system/system.component";
import {BrowserModule} from "@angular/platform-browser";
import {AuthGuard} from "./layouts/auth/auth.guard";

const routes: Routes = [
  {path: 'Auth', component: AuthComponent},
  {path: 'Site', component: SystemComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
