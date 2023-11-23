import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-r-delete',
  templateUrl: './r-delete.component.html',
  styleUrls: ['./r-delete.component.scss']
})
export class RDeleteComponent {
  constructor(private crudService: CrudService, private route: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    const id: number = this.activeRoute.snapshot.params['id'];
    this.crudService.deleteRayonById(id).subscribe({
      next: () =>{
        this.route.navigateByUrl('rayon')

      },
      error: (error) =>{
        
        console.error('Une erreur s\'est produite lors de la suppression :', error);
      }
    })

    
  }

}
