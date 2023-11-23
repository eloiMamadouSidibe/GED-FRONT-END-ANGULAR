import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../_service/users.service';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-u-view',
  templateUrl: './u-view.component.html',
  styleUrls: ['./u-view.component.scss']
})
export class UViewComponent implements OnInit {
  user!: User
  constructor(private activeRoute: ActivatedRoute, private userService: UsersService){}

  ngOnInit(): void {
    const login = this.activeRoute.snapshot.params['login']
    this.userService.getUser(login).subscribe({
      next: (response) =>{
        this.user = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
