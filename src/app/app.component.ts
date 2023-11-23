import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ged';
  constructor(private  route: Router){}

  isLoginPage(): boolean {
    return this.route.url === '/user/login';
  }
  isRegisterPage(): boolean {
    return this.route.url === '/user/register';
  }
  isAdminPage(): boolean {
    return this.route.url.startsWith('/admin');
  }
}
