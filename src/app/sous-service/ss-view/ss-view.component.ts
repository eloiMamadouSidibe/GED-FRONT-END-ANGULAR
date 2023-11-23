import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SousService } from 'src/app/core/model/sous-service';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-ss-view',
  templateUrl: './ss-view.component.html',
  styleUrls: ['./ss-view.component.scss']
})
export class SsViewComponent {
  sousService!: SousService
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getSousServiceById(id).subscribe({
      next: (response) =>{
        this.sousService = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
