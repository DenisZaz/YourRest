import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import { User } from "../Models/user.model";
import {Router} from "@angular/router";

@Injectable({providedIn:'root'})
export class UsersService {
  private isAuth = false
  constructor(private http: HttpClient, private router: Router) {
  }

 async register(email: string, password: string, name:string) {
    const response = await fetch('http://localhost:3000/auth', {
      method: "POST",
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        id: Math.random() * 10000
      })
    }).then(response => response.json())
      .catch(() => console.log("error"))
   if (response) this.isAuth = true,
     localStorage.setItem('name', name),
     await this.router.navigate(['Site'])
 }

  async login(user:User){
    const data = await fetch('http://localhost:3000/auth')
      .then(res=>res.json())
    const [response] = data.filter((item: {email: string, password: string; }) => (item.email == user.email && item.password == user.password))
    if(response) await this.router.navigate(['Site']) ,
      this.isAuth = true,
      localStorage.setItem('name', response.name)
    else console.log('Error')
  }
  logout(){
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    })
  }


}


