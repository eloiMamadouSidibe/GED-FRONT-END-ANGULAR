import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rayon } from 'src/app/core/model/rayon';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-r-view',
  templateUrl: './r-view.component.html',
  styleUrls: ['./r-view.component.scss']
})
export class RViewComponent {
  rayon!: Rayon
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getRayonById(id).subscribe({
      next: (response) =>{
        this.rayon = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
