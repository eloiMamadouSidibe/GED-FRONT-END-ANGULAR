import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public errorMessage: string = '';
  public loginFailed: boolean = false;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private route: Router,
    private authService: AuthService ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmit(){
    this.loginService.login(this.loginForm.value).pipe(
      tap( (response) => {
        this.authService.saveToken(response.id_token)
      })
    ).subscribe({
      next : (data) => {
        if(localStorage.getItem('token')){
          console.log('success');
        }   
      },
      error : (error) =>{
        
          this.errorMessage = "Erreur de connexion. Veuillez vérifier le nom d'utilisateur et le mot\
          de passe puis réessayer svp.";
          this.loginFailed = true;
  }
      
  });

  }


}
