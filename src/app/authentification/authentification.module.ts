import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { RegisterComponent } from './component/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthentificationRoutingModule,
    MatFormFieldModule

  ],
  
})
export class AuthentificationModule { }
