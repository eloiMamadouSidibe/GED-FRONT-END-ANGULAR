import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salle } from 'src/app/core/model/salle';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-sa-view',
  templateUrl: './sa-view.component.html',
  styleUrls: ['./sa-view.component.scss']
})
export class SaViewComponent {
  salle!: Salle
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getSalleById(id).subscribe({
      next: (response) =>{
        this.salle = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
