import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from 'src/app/core/model/salle';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-sa-edit',
  templateUrl: './sa-edit.component.html',
  styleUrls: ['./sa-edit.component.scss']
})
export class SaEditComponent {
  salle: Salle = new Salle()
  salleForm!: FormGroup;
  constructor(private route: Router, private activeRoute:ActivatedRoute, private crudService: CrudService,
    private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.preFill()
    this.salleForm = this.formBuilder.group({
      id: [null],
      code: [null],
      superficie: [null]
    })
    
  }
  preFill(): void{
    const id: number = this.activeRoute.snapshot.params['id']
    this.crudService.getSalleById(id).subscribe({
      next: (response) =>{
        this.salle.id = response.id
        this.salle.code = response.code;
        this.salle.superficie = response.superficie;
        this.salleForm.setValue(this.salle)

      },
      error: (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })
  }
  onSubmit(){
    this.crudService.editSalle(this.salleForm.value).subscribe({
      next: () =>{
        this.route.navigateByUrl('salle')

      },
      error : (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })

  }

}
