import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sa-index',
  templateUrl: './sa-index.component.html',
  styleUrls: ['./sa-index.component.scss']
})
export class SaIndexComponent {
  salles: any
  currentPage: number = 0;// page actuelle
  pageSize: number = 5;//nombre d'élement par page
  numberOfElement!: number

  constructor(private crudService: CrudService, private route: Router){}
  
    ngOnInit(): void {
      this.loadSalle()
      this.crudService.getAllSalle().subscribe({
        next : (response) => {
          this.numberOfElement = response.length
        },
        error: (error) =>{
          console.log('une erreur s\'est produite',error)
        }
      })
  
    }

    loadSalle(): void{
      this.crudService.getSallePaginate(this.currentPage,this.pageSize).subscribe({
        next: (response) =>{
          this.salles = response
        },
        error: (error) =>{
          console.log(error)
        }
      })
    }

    onPageChange(event: PageEvent): void{
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadSalle()
  
    }
    onClickDelete(id: number){
      this.route.navigateByUrl(`salle/delete/${id}`)
  
    }
    onClickModifie(id: number){
      this.route.navigateByUrl(`salle/edit/${id}`)
  
    }

}
