import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sa-delete',
  templateUrl: './sa-delete.component.html',
  styleUrls: ['./sa-delete.component.scss']
})
export class SaDeleteComponent {
  constructor(private crudService: CrudService, private route: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    const id: number = this.activeRoute.snapshot.params['id'];
    this.crudService.deleteSalleById(id).subscribe({
      next: () =>{
        this.route.navigateByUrl('salle')

      },
      error: (error) =>{
        
        console.error('Une erreur s\'est produite lors de la suppression :', error);
      }
    })

    
  }
}
