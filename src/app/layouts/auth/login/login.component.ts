import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../Shared/Services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  constructor(private  usersService: UsersService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{6,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  async onSubmit(){
    await this.usersService.login(this.form.value)
  }


  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

}
