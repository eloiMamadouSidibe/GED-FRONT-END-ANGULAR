import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-ss-index',
  templateUrl: './ss-index.component.html',
  styleUrls: ['./ss-index.component.scss']
})
export class SsIndexComponent implements OnInit {
  sousServices: any;
  numberOfSousService!: number; //nombre total d'élément
  currentPage: number = 0; //page actuelle
  pagezise: number = 5; //nombre d'élément par page

  constructor(private crudService: CrudService, private route: Router){}
  
    ngOnInit(): void {
      this.loadSousService()
      this.crudService.getAllSousService().subscribe({
        next : (response) => {
          this.numberOfSousService = response.length
       
        },
        error: (error) =>{
          console.log('une erreur s\'est produite',error)
        }
      })
  
    }
    loadSousService(): void{
      this.crudService.getSousServicePaginate(this.currentPage,this.pagezise).subscribe({
        next: (response) =>{
          this.sousServices = response
        },
        error: (error) =>{
          console.log('une erreur s\'est produite',error)
        }
      })
    }
    onPageChange(event: PageEvent){
      this.currentPage = event.pageIndex;
      this.pagezise = event.pageSize;;
      this.loadSousService()

    }
    onClickDelete(id: number){
      this.route.navigateByUrl(`sous-service/delete/${id}`)
  
    }
    onClickModifie(id: number){
      this.route.navigateByUrl(`sous-service/edit/${id}`)
  
    }

}
