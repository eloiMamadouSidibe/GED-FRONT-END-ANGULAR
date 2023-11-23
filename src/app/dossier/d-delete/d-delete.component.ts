import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-d-delete',
  templateUrl: './d-delete.component.html',
  styleUrls: ['./d-delete.component.scss']
})
export class DDeleteComponent {
  constructor(private crudService: CrudService, private route: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    const id: number = this.activeRoute.snapshot.params['id'];
    this.crudService.deleteDossierById(id).subscribe({
      next: () =>{
        this.route.navigateByUrl('dossier')

      },
      error: (error) =>{
        
        console.error('Une erreur s\'est produite lors de la suppression :', error);
      }
    })

    
  }

}
