import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import {SharedModule} from "../../Shared/shared.module";
import {MainComponent} from "./main/main.component";
import {SystemComponent} from "./system.component";
import {SystemRoutingModule} from "./system-routing.module";
import { FavouritesComponent } from './favourites/favourites.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestComponent } from './favourites/rest/rest.component';


@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    SystemComponent,
    FavouritesComponent,
    RestaurantsComponent,
    RestComponent
  ]
})

export class SystemModule {}
