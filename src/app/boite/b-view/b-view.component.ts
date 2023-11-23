import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boite } from 'src/app/core/model/boite';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-b-view',
  templateUrl: './b-view.component.html',
  styleUrls: ['./b-view.component.scss']
})
export class BViewComponent {
  boite!: Boite
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getBoiteById(id).subscribe({
      next: (response) =>{
        this.boite = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
