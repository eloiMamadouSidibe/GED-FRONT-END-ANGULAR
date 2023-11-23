import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';
import { CrudService as TypeDocumentCrud } from 'src/app/type-document/_service/crud.service';
import { CrudService as BoiteCrud } from 'src/app/boite/_service/crud.service';
import { CrudService as ProcessCrud } from 'src/app/process/_service/crud.service';
import { CrudService as ServiceCrud } from 'src/app/service/_service/crud.service';
import { CrudService as SousServiceCrud } from 'src/app/sous-service/_service/crud.service';
import { Dossier } from 'src/app/core/model/dossier';

@Component({
  selector: 'app-d-edit',
  templateUrl: './d-edit.component.html',
  styleUrls: ['./d-edit.component.scss']
})
export class DEditComponent implements OnInit {
  dossierForm!: FormGroup;
  typeDocuments!: any[];
  boites!: any[];
  processs!: any[];
  services!: any[];
  sousServices!: any[];
  dossier: Dossier = new Dossier()

  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder,
    private typeDocumentCrud: TypeDocumentCrud, private boiteCrud: BoiteCrud, private processCrud: ProcessCrud,
    private serviceCrud: ServiceCrud, private sousServiceCrud: SousServiceCrud,
    private activeRoute: ActivatedRoute){}
   
    ngOnInit(): void {
      this.load();
      this.dossierForm = this.formBuilder.group({
        id: [null],
        code: [null],
        motCle: [null],
        dateProduction: [null],
        typeDocument: [null],
        boite: [null],
        process: [null],
        service: [null],
        sousService: [null]
      })
      this.preFill()
    }
   //chargement de la liste des type de documents pour le formulaire
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
    //pre-remplir le formulaire de modification
    preFill(): void{
      const id: number = this.activeRoute.snapshot.params['id'];
      this.crudService.getDossierById(id).subscribe({
        next: (response) =>{
          this.dossier.id = response.id
          this.dossier.code = response.code;
          this.dossier.motCle = response.motCle;
          this.dossier.dateProduction = response.dateProduction
          this.dossier.typeDocument = response.typeDocument
          this.dossier.boite = response.boite
          this.dossier.process = response.process
          this.dossier.service = response.service
          this.dossier.sousService = response.sousService
          this.dossierForm.setValue(this.dossier);
        },
        error: (error) =>{
          console.log("Une erreu s'est produite",error)
        }
      })
    
    }
    //soumission du formulaire de modification
    onSubmit(){
      this.crudService.editDossier(this.dossierForm.value).subscribe({
        next: () =>{
          this.route.navigateByUrl('dossier')
  
        },
        error : (error) =>{
          console.log("Une erreu s'est produite",error)
        }
      })
  
    }

}
