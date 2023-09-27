import { NgModule } from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {SystemComponent} from "./system.component";
import {MainComponent} from "./main/main.component";
import {FavouritesComponent} from "./favourites/favourites.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";


const routes: Routes = [
  {path: '', component: SystemComponent, children:[
      {path: 'main', component: MainComponent},
      {path: 'restaurants', component: RestaurantsComponent},
      {path: 'favourites', component: FavouritesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule{}
