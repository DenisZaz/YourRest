import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toHis() {
    window.scrollTo({left: 0,top: 765, behavior: 'smooth'});
  };
}
