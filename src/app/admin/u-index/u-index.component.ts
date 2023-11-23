import { Component } from '@angular/core';
import { UsersService } from '../_service/users.service';
import { User } from 'src/app/core/model/user';
import { UserConnectedService } from 'src/app/core/_service/user-connected.service';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.scss']
})
export class UIndexComponent {
  constructor(private userService: UsersService, private userConnectedSercice: UserConnectedService,
    private router: Router){}
  users!: User[];
  userConnected!: User;
  btnStatus: boolean = false;
  currentPage: number = 0;// page actuelle
  pageSize: number = 5;//nombre d'élement par page
  numberOfElement!: number


  ngOnInit(): void {
    this.getUserConnected();
    this.listUser()
    this.userService.getUsers().subscribe((response : any) => {
      this.numberOfElement = response.length;
    });
   
  }
  listUser(): void{
    this.userService.getUserPaginate(this.currentPage,this.pageSize).subscribe({
      next: (response) =>{
        this.users = response;
      
      },
      error : (error) => {
        console.log(error)
      }
    })
  }
  onPageChange(event: PageEvent): void{
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.listUser()

  }
  getUserConnected(): void{
    this.userConnectedSercice.getUserConnected().subscribe({
      next: (response) => {
        this.userConnected = response
      }
    })

  }
  deleteUser(login: string): void{
    this.userService.deleteUser(login).subscribe({
      next: () =>{
        this.listUser()
      },
      error: (error) =>{
        console.log(error)
      }
    }) 
 
  }
  updateStatus(user: User): void{
    this.userService.updateUser(user).pipe(
      map((user) =>({
        ...user,
        activated: user.activated? false : true
      })),
      switchMap((statusModify) => this.userService.updateUser(statusModify))

    ).subscribe({
      next: () =>{
        this.listUser()
      },
      error : (error) =>{
        console.log(error)
      }
    })
  }
  getLogin(login: string): void{
    this.router.navigateByUrl(`admin/edit/${login}`)
  }

}
