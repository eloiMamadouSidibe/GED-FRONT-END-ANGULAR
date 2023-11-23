import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-r-index',
  templateUrl: './r-index.component.html',
  styleUrls: ['./r-index.component.scss']
})
export class RIndexComponent {
  rayons: any;
  currentPage: number = 0;// page actuelle
  pageSize: number = 5;//nombre d'élement par page
  numberOfElement!: number

  constructor(private crudService: CrudService, private route: Router){}
  
    ngOnInit(): void {
      this.loadRayon()
      this.crudService.getAllRayon().subscribe({
        next : (response) => {
          this.numberOfElement = response.length
       
        },
        error: (error) =>{
          console.log('une erreur s\'est produite',error)
        }
      })
  
    }

    loadRayon(): void{
      this.crudService.getRayonPaginate(this.currentPage,this.pageSize).subscribe({
        next: (response) =>{
          this.rayons = response
        },
        error: (error) =>{
          console.log(error)
        }
      })
    }

    onPageChange(event: PageEvent): void{
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadRayon();
  
    }


    onClickDelete(id: number){
      this.route.navigateByUrl(`rayon/delete/${id}`)
  
    }
    onClickModifie(id: number){
      this.route.navigateByUrl(`rayon/edit/${id}`)
  
    }
}
