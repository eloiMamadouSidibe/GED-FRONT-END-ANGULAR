import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../_service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.scss']
})
export class UEditComponent {
  updateForm!: FormGroup;
  user: User = new User()
constructor(private userService: UsersService, private formBuilder: FormBuilder,
   private activeRoute: ActivatedRoute, private route: Router){}

  ngOnInit(): void {
    this.createForm()
    this.preFill()
    
  }
  //creation du formulaire de modification
  createForm(): void{
    this.updateForm = this.formBuilder.group({
      login: [null,Validators.required],
      firstName: [null],
      lastName: [null],
      authorities: [null],
      email: [null,[Validators.required,Validators.email]]
    })
  }
  //pre-remplir le formulaire de modif 
  preFill(){
    const login: string = this.activeRoute.snapshot.params['login'];
    this.userService.getUser(login).subscribe({
      next: (response) =>{
        this.user.login = response.login;
        this.user.firstName = response.firstName;
        this.user.lastName = response.lastName;
        this.user.email = response.email;
        this.user.authorities = response.authorities
        this.updateForm.setValue(this.user)
      }
    })
  }
  //click sur le bouton modifier
  onSubmit(){
    const login: string = this.activeRoute.snapshot.params['login'];
    this.userService.getUser(login).pipe(
      map((user) =>({
        ...user,
        login: this.updateForm.value.login,
        firstName: this.updateForm.value.firstName,
        lastName: this.updateForm.value.lastName,
        authorities: this.updateForm.value.authorities,
        email: this.updateForm.value.email

      })),
      switchMap((userModify) => this.userService.updateUser(userModify))
    ).subscribe({
      next: ()=>{
        this.route.navigateByUrl('admin/users')
      },
      error: (error) =>{
        console.log(error)
      }
    })
  } 
  onAnnuler(): void{
    this.route.navigateByUrl('admin/users')
  }
}



