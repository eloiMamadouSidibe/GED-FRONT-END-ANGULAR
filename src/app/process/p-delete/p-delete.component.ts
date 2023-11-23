import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-p-delete',
  templateUrl: './p-delete.component.html',
  styleUrls: ['./p-delete.component.scss']
})
export class PDeleteComponent implements OnInit {
  constructor(private crudService: CrudService, private route: Router, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    const id: number = this.activeRoute.snapshot.params['id'];
    this.crudService.deleteProcessById(id).subscribe({
      next: () =>{
        this.route.navigateByUrl('process')

      },
      error: (error) =>{
        
        console.error('Une erreur s\'est produite lors de la suppression :', error);
      }
    })

    
  }

}
