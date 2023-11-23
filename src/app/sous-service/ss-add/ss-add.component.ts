import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';
import { CrudService as ServiceCrudService } from '../../service/_service/crud.service';


@Component({
  selector: 'app-ss-add',
  templateUrl: './ss-add.component.html',
  styleUrls: ['./ss-add.component.scss']
})
export class SsAddComponent {
  sousServiceForm!: FormGroup;
  services!: any[];


  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder,
    private serviceCrudService: ServiceCrudService){}

  ngOnInit(): void {
    this.loadService();
    this.sousServiceForm = this.formBuilder.group({
      code: [null],
      nom: [null],
      service: [null]
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
     this.crudService.addSousService(this.sousServiceForm.value).subscribe({
      next: () => {
        this.route.navigateByUrl('sous-service')
        console.log(this.sousServiceForm.value)
      },
      error: (error) => {
        console.log(error)
      }

    })
   

  }

}
