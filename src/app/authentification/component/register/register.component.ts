import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../_service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm!: FormGroup;
public errorMessage!: string;
public passwordStrength: any = null;
public succesMessage!: string
constructor(private loginService: LoginService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
   this.createForm()
  }
  //creation du formulaire d'inscription
  createForm(): void{
    this.registerForm = this.formBuilder.group({
      login: [null],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.minLength(8), Validators.required]],
      confirmPassword: [null]
    })
    // Vérifier la robustesse du mot de passe chaque fois que le mot de passe change
    this.registerForm.controls['password'].valueChanges.subscribe(password => {
      this.passwordStrength = this.checkPasswordStrength(password);
    });
  }
  
  //click sur le bouton s'incrire
  onSubmit(){
    if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.errorMessage = "Les mots de passe ne correspondent pas";
      return;
    }

    this.loginService.register(this.registerForm.value).subscribe({
      next: () =>{
        this.succesMessage = 'Votre compte été créé avec succès. Vous pourrez vous connecter dès qu\'un\
        administrateur active votre compte';
        this.registerForm.reset();
        this.passwordStrength = null
        this.errorMessage = ''

      }
    })
  }

  checkPasswordStrength(password: string) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
  
    const conditionsMet = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;
  
    if (conditionsMet === 4) {
      return { score: 3, label: 'Fort' };
    } else if (conditionsMet === 3) {
      return { score: 2, label: 'Moyen' };
    } else {
      return { score: 1, label: 'Faible' };
    }
  }
  
  
  
}
