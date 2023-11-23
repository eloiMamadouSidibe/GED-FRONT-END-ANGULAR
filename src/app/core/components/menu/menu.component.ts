import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserConnectedService } from '../../_service/user-connected.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userConnected!: User
  imageUrl?: string
  login!: string
  constructor(private userConnectedService: UserConnectedService, private route: Router){}

ngOnInit(): void {
 this.userConnectedService.getUserConnected().subscribe({
  next: (response) =>{
    this.userConnected = response
    this.imageUrl = response.imageUrl
    this.login = response.login
  },
  error: (error) =>{
    console.log('une erreur s\'est produite',error)
  }
 })
}
logOut(): void{
localStorage.removeItem('token')
this.route.navigateByUrl('/user/login')
}



}
