import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../Shared/Services/user.service";

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {
  form!: FormGroup
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{6,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name:new FormControl('',Validators.required)
    })
  }

  async onSubmit(){
    await this.userService.register(this.form.value.email,this.form.value.password,this.form.value.name);
  }


  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get name(){
    return this.form.get('name');
  }

}
