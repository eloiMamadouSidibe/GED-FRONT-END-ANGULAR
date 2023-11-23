import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-se-index',
  templateUrl: './se-index.component.html',
  styleUrls: ['./se-index.component.scss'],
})
export class SeIndexComponent implements OnInit{
  services: any[] = [];
  pageSize = 5; // Nombre d'éléments par page
  currentPage = 0; // Page actuelle
  numberOfElement!:number //nombre total d'élément

 
   
constructor(private crudService: CrudService, private route: Router){}

  ngOnInit(): void {
   this.loadServices()
   this.crudService.getAllService().subscribe(
    (response) =>{
      this.numberOfElement = response.length
    }
   )

  }

  loadServices(): void {
    this.crudService.getServicePaginate(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.services = response;

      },
      error: (error) => {
        console.log('Une erreur s\'est produite', error);
      },
    });
  }
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadServices();
  }
  
  onClickDelete(id: number){
    this.route.navigateByUrl(`service/delete/${id}`)

  }
  onClickModifie(id: number){
    this.route.navigateByUrl(`service/edit/${id}`)

  }



}
