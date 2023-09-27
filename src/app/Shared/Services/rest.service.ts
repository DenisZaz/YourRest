import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import {IRest} from "../Models/rest.interface";

@Injectable({
  providedIn: 'root'
})

export class RestService{

  async Add(name: string, address: string, phone: string, rating: number, comment: string){
    const response = await fetch('http://localhost:3000/favourites',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        rating: rating,
        comment: comment,
        id: Math.random() * 1000,
        date: new Date().toLocaleString()
      })
    }).then(response => response.json())
      .catch(() => console.log("error"))
    return response
  }

  async Show(){
    const response = await fetch('http://localhost:3000/favourites')
      .then(response => response.json())
      .catch(() => console.log("error"))
    return response
  }

  constructor(private http: HttpClient) {}

  API_URL = 'http://localhost:3000/rest'
  getAll(){
    return this.http.get<IRest[]>(this.API_URL)
  }

  async editItem(rest:IRest){
    const response = await fetch("http://localhost:3000/favourites/"+ rest.id,{
      method: "PUT",
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(rest)
    }).then(res => res.json())
    return response
  }

  async delItem(id: number){
    const response = await fetch("http://localhost:3000/favourites/"+ id,{
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
    }).then(res => res.json())
    return response
  }

}


