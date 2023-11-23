import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/core/model/service';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-se-view',
  templateUrl: './se-view.component.html',
  styleUrls: ['./se-view.component.scss']
})
export class SeViewComponent {
  service!: Service
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getServiceById(id).subscribe({
      next: (response) =>{
        this.service = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
