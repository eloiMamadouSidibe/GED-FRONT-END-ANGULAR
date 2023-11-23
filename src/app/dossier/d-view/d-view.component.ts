import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dossier } from 'src/app/core/model/dossier';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-d-view',
  templateUrl: './d-view.component.html',
  styleUrls: ['./d-view.component.scss']
})
export class DViewComponent {
  dossier!: Dossier
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getDossierById(id).subscribe({
      next: (response) =>{
        this.dossier = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
