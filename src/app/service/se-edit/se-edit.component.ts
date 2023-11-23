import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/core/model/service';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-se-edit',
  templateUrl: './se-edit.component.html',
  styleUrls: ['./se-edit.component.scss']
})
export class SeEditComponent implements OnInit {
  service: Service = new Service()
  serviceForm!: FormGroup;
  constructor(private route: Router, private activeRoute:ActivatedRoute, private crudService: CrudService,
    private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.preFill()
    this.serviceForm = this.formBuilder.group({
      id: [null],
      code: [null],
      nom: [null]
    })
    
  }
  preFill(): void{
    const id: number = this.activeRoute.snapshot.params['id']
    this.crudService.getServiceById(id).subscribe({
      next: (response) =>{
        this.service.id = response.id
        this.service.code = response.code;
        this.service.nom = response.nom;
        this.serviceForm.setValue(this.service)

      },
      error: (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })
  }
  onSubmit(){
    this.crudService.editService(this.serviceForm.value).subscribe({
      next: () =>{
        this.route.navigateByUrl('service')

      },
      error : (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })

  }

}
