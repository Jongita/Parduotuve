import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  public isLoggedin:boolean=false;

  constructor (private authService:AuthService){
    if (authService.isLoggedin()){
      this.isLoggedin=true;
    }else{
      this.isLoggedin=false;
    }
  }

  public logoutClick(){
    this.authService.logOut();
    this.isLoggedin=false;
  }

}
