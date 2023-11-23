import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.scss']
})
export class PIndexComponent implements OnInit{
  processs: any;
  currentPage: number = 0;// page actuelle
  pageSize: number = 5;//nombre d'élement par page
  numberOfElement!: number

  constructor(private crudService: CrudService, private route: Router){}
  
    ngOnInit(): void {
      this.loadProcess()
      this.crudService.getAllProcess().subscribe({
        next : (response) => {
          this.numberOfElement = response.length
        },
        error: (error) =>{
          console.log('une erreur s\'est produite',error)
        }
      })
  
    }

    loadProcess(): void{
      this.crudService.getProcessPaginate(this.currentPage,this.pageSize).subscribe({
        next: (response) =>{
          this.processs = response
        },
        error: (error) =>{
          console.log(error)
        }
      })
    }

    onPageChange(event: PageEvent): void{
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadProcess();
  
    }
    onClickDelete(id: number){
      this.route.navigateByUrl(`process/delete/${id}`)
  
    }
    onClickModifie(id: number){
      this.route.navigateByUrl(`process/edit/${id}`)
  
    }

}
