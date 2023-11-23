import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-d-index',
  templateUrl: './d-index.component.html',
  styleUrls: ['./d-index.component.scss']
})
export class DIndexComponent {
  dossiers: any;
  currentPage: number = 0;// page actuelle
  pageSize: number = 5;//nombre d'élement par page
  numberOfElement!: number

  constructor(private crudService: CrudService, private route: Router){}
  
    ngOnInit(): void {
      this.loadDossier()
      this.crudService.getAllDossier().subscribe({
        next : (response) => {
          this.numberOfElement = response.length
        },
        error: (error) =>{
          console.log('une erreur s\'est produite',error)
        }
      })
  
    }
      //recuperer la liste paginer des dossiers
    loadDossier(): void{
      this.crudService.getDossierPaginate(this.currentPage,this.pageSize).subscribe({
        next: (response) =>{
          this.dossiers = response
        },
        error: (error) =>{
          console.log(error)
        }
      })
    }
     //a chaque fois que la page change
    onPageChange(event: PageEvent): void{
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadDossier();
  
    }
    onClickDelete(id: number){
      this.route.navigateByUrl(`dossier/delete/${id}`)
  
    }
    onClickModifie(id: number){
      this.route.navigateByUrl(`dossier/edit/${id}`)
  
    }

}
