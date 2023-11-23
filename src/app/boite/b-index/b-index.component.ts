import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Boite } from 'src/app/core/model/boite';

@Component({
  selector: 'app-b-index',
  templateUrl: './b-index.component.html',
  styleUrls: ['./b-index.component.scss']
})
export class BIndexComponent {
  boites!: any;
  numberOfElement!: number;
  currentPage: number = 0;
  pageSize: number = 5;

  constructor(private crudService: CrudService, private route: Router){}
  
    ngOnInit(): void {
      this.loadBoite()
      this.crudService.getAllBoite().subscribe({
        next : (response) => {
          this.numberOfElement = response.length
       
        },
        error: (error) =>{
          console.log('une erreur s\'est produite',error)
        }
      })
    }
    loadBoite(): void{
      this.crudService.getBoitePaginate(this.currentPage,this.pageSize).subscribe({
        next: (response) =>{
          this.boites = response;
        },
        error: (error) =>{
          console.log(error)
        }
      })
    }
    onPageChange(event: PageEvent): void{
      this.pageSize = event.pageSize;
      this.currentPage = event.pageIndex;
      this.loadBoite()
        
    }
    onClickDelete(id: number){
      this.route.navigateByUrl(`boite/delete/${id}`)
  
    }
    onClickModifie(id: number){
      this.route.navigateByUrl(`boite/edit/${id}`)
  
    }

}
