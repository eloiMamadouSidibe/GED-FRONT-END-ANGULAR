import { Component } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-b-delete',
  templateUrl: './b-delete.component.html',
  styleUrls: ['./b-delete.component.scss']
})
export class BDeleteComponent {
  constructor(private crudService: CrudService, private route: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    const id: number = this.activeRoute.snapshot.params['id'];
    this.crudService.deleteBoiteById(id).subscribe({
      next: () =>{
        this.route.navigateByUrl('boite')

      },
      error: (error) =>{
        
        console.error('Une erreur s\'est produite lors de la suppression :', error);
      }
    })

  }

}
