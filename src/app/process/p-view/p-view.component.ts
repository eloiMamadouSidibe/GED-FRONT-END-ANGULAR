import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Process } from 'src/app/core/model/process';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-p-view',
  templateUrl: './p-view.component.html',
  styleUrls: ['./p-view.component.scss']
})
export class PViewComponent {
  process!: Process
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getProcessById(id).subscribe({
      next: (response) =>{
        this.process = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
