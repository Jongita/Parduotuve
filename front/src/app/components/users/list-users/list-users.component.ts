import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})


export class ListUsersComponent {
  public users:User[]=[];

  private loadData(){
    this.usersService.getUsers().subscribe({
      next:(users)=>{
        this.users=users;
        console.log(this.users[0]);
      }
    });
  }

  constructor (private usersService:UsersService){
    this.loadData();

     // perkelta i servisa


        // let user=this.users[0];
        // // console.log(this.users[0]);
        // // const u=new User("naujas@naujas.lt");
        // // console.log(u);

        // const u=new User(user.email, user.id, user.name, user.password, user.type, user.token);
        
        // console.log(user);
        // console.log(u);
  }

  public onDeleteClick(id:number){
    this.usersService.deleteUser(id).subscribe({
      next:(result)=>{
        this.loadData();
      }
    })
  }

}



