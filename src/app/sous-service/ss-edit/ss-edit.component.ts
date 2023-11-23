import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SousService } from 'src/app/core/model/sous-service';
import { CrudService } from '../_service/crud.service';
import { CrudService as ServiceCrudService } from '../../service/_service/crud.service';

@Component({
  selector: 'app-ss-edit',
  templateUrl: './ss-edit.component.html',
  styleUrls: ['./ss-edit.component.scss']
})
export class SsEditComponent {
  sousService: SousService = new SousService()
  sousServiceForm!: FormGroup;
  services!: any[]
  constructor(private route: Router, private activeRoute:ActivatedRoute, private crudService: CrudService,
    private formBuilder: FormBuilder,private serviceCrudService: ServiceCrudService ){}
  ngOnInit(): void {
    this.loadService();
    this.sousServiceForm = this.formBuilder.group({
      id: [null],
      code: [null],
      nom: [null],
      service: [null]
    });
   
    this.preFill()
    
  }
  preFill(): void{
    const id: number = this.activeRoute.snapshot.params['id']
    this.crudService.getSousServiceById(id).subscribe({
      next: (response) =>{
        this.sousService.id = response.id
        this.sousService.code = response.code;
        this.sousService.nom = response.nom;
        this.sousService.service = response.service
        this.sousServiceForm.setValue(this.sousService);
      },
      error: (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })
  }
  loadService(): void{
    this.serviceCrudService.getAllService().subscribe({
      next: (response) => {
        this.services = response
       
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }
  onSubmit(){
    this.crudService.editSousService(this.sousServiceForm.value).subscribe({
      next: () =>{
        this.route.navigateByUrl('sous-service')

      },
      error : (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })

  }

}
