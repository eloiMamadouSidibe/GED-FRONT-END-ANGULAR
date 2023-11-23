import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-se-delete',
  templateUrl: './se-delete.component.html',
  styleUrls: ['./se-delete.component.scss']
})
export class SeDeleteComponent implements OnInit{
  constructor(private crudService: CrudService, private route: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    const id: number = this.activeRoute.snapshot.params['id'];
    this.crudService.deleteServiceById(id).subscribe({
      next: () =>{
        this.route.navigateByUrl('service')

      },
      error: (error) =>{
        
        console.error('Une erreur s\'est produite lors de la suppression :', error);
      }
    })

    
  }


}
