import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-t-d-index',
  templateUrl: './t-d-index.component.html',
  styleUrls: ['./t-d-index.component.scss']
})
export class TdIndexComponent implements OnInit {
  typeDocument: any;
  currentPage: number = 0;// page actuelle
  pageSize: number = 5;//nombre d'élement par page
  numberOfElement!: number
   constructor(private crudService: CrudService, private route: Router,){}

  ngOnInit(): void {
    this.loadTypeDocument()
    this.crudService.getAllType().subscribe((response : any) => {
      this.numberOfElement = response.length;
    });
  }

  loadTypeDocument(): void{
    this.crudService.getTypePaginate(this.currentPage,this.pageSize).subscribe({
      next: (response) =>{
        this.typeDocument = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }
  onPageChange(event: PageEvent): void{
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadTypeDocument()

  }
  onClickDelete(id: number){
    this.route.navigateByUrl(`type-document/delete/${id}`);
  }
  onClickModifie(id: number){
    this.route.navigateByUrl(`type-document/edit/${id}`);
  }
}
