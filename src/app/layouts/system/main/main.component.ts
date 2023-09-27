import { Component, OnInit } from '@angular/core';
import {User} from "../../../Shared/Models/user.model";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  user!: User;
  name = localStorage.getItem("name");
  constructor() {}


  ngOnInit(): void {
    this.user = JSON.parse('user')
  }

  toHis() {
    window.scrollTo({left: 0,top: 810, behavior: 'smooth'});
  };

}
