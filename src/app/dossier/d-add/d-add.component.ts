import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';
import { CrudService as TypeDocumentCrud } from 'src/app/type-document/_service/crud.service';
import { CrudService as BoiteCrud } from 'src/app/boite/_service/crud.service';
import { CrudService as ProcessCrud } from 'src/app/process/_service/crud.service';
import { CrudService as ServiceCrud } from 'src/app/service/_service/crud.service';
import { CrudService as SousServiceCrud } from 'src/app/sous-service/_service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-d-add',
  templateUrl: './d-add.component.html',
  styleUrls: ['./d-add.component.scss']
})
export class DAddComponent {
  dossierForm!: FormGroup;
  typeDocuments!: any[];
  boites!: any[];
  processs!: any[];
  services!: any[];
  sousServices!: any[];


  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder,
    private typeDocumentCrud: TypeDocumentCrud, private boiteCrud: BoiteCrud, private processCrud: ProcessCrud,
    private serviceCrud: ServiceCrud, private sousServiceCrud: SousServiceCrud){}

  ngOnInit(): void {
    this.load();
    this.dossierForm = this.formBuilder.group({
      code: [null],
      motCle: [null],
      dateProduction: [null],
      typeDocument: [null],
      boite: [null],
      process: [null],
      service: [null],
      sousService: [null]
    })
  }
  load(): void{
    this.typeDocumentCrud.getAllType().subscribe({
      next: (response) => {
        this.typeDocuments = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
    this.boiteCrud.getAllBoite().subscribe({
      next: (response) => {
        this.boites = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
    this.processCrud.getAllProcess().subscribe({
      next: (response) => {
        this.processs = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
    this.serviceCrud.getAllService().subscribe({
      next: (response) => {
        this.services = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
    this.sousServiceCrud.getAllSousService().subscribe({
      next: (response) => {
        this.sousServices = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }
  onSubmit(){
     this.crudService.addDossier(this.dossierForm.value).subscribe({
      next: () => {
        this.route.navigateByUrl('dossier')
      },
      error: (error) => {
        console.log(error)
      }

    })
   

  }

}
