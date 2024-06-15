import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:User|null=null;

   constructor(private httpClient:HttpClient) { 
    const user=localStorage.getItem("user");
    if (user!=null){
      this.user=JSON.parse(user);
    }
  }

  public registerUser(user:User){
    console.log("registruojame nauja vartotoja");
    console.log(user);
    return this.httpClient.post("http://localhost:4999/auth/signin", user);
  }

  public loginUser(user:User){
    return this.httpClient.post<User>("http://localhost:4999/auth/login", user).pipe(tap( (response)=>{
      this.user=response;
      localStorage.setItem("user", JSON.stringify(this.user))
    }))
}

  public logOut(){
    this.user=null;
    localStorage.removeItem("user");
    
  }

  public isLoggedin(){
    return (this.user!=null && this.user.token!=null);
  }

}