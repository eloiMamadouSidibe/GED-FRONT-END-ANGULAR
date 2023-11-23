import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ss-delete',
  templateUrl: './ss-delete.component.html',
  styleUrls: ['./ss-delete.component.scss']
})
export class SsDeleteComponent {
  constructor(private crudService: CrudService, private route: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    const id: number = this.activeRoute.snapshot.params['id'];
    this.crudService.deleteSousServiceById(id).subscribe({
      next: () =>{
        this.route.navigateByUrl('sous-service')

      },
      error: (error) =>{
        
        console.error('Une erreur s\'est produite lors de la suppression :', error);
      }
    })

    
  }
}
