import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {RestService} from "../../../Shared/Services/rest.service";


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  form1!: FormGroup;
  rests: any[] = []

  constructor(private rest: RestService, private service: RestService) { }

  async onSubmit() {
    const response = await this.rest.Add(this.form1.value.name, this.form1.value.address, this.form1.value.phone, this.form1.value.rating, this.form1.value.comment);
    this.rests = [...this.rests, response],
      console.log(this.rests)
  }


 async ngOnInit() {
    this.form1 = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      phone: new FormControl(''),
      rating: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    });

    this.rests = await this.rest.Show()
   console.log(this.rests)
  }

}
