import { Component, OnInit } from '@angular/core';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router} from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-t-d-delete',
  templateUrl: './t-d-delete.component.html',
  styleUrls: ['./t-d-delete.component.scss']
})
export class TdDeleteComponent implements OnInit{
    id!: number;
 constructor(private crudService: CrudService, private activeRoute: ActivatedRoute,private route: Router){}

  ngOnInit(): void {
     this.id = +this.activeRoute.snapshot.params['id']
    this.crudService.deleteTypeById(this.id).subscribe({

     next: () => {       
        this.route.navigateByUrl('type-document')
      },
     error: (error) => {
        console.error('Une erreur s\'est produite lors de la suppression :', error);
    
      }
  });

 }
}
