import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../_service/crud.service';
import { TypeDocument } from 'src/app/core/model/type-document';

@Component({
  selector: 'app-t-d-view',
  templateUrl: './t-d-view.component.html',
  styleUrls: ['./t-d-view.component.scss']
})
export class TDViewComponent implements OnInit {
  typeDocument!: TypeDocument
  constructor(private activeRoute: ActivatedRoute, private crudService: CrudService){}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id']
    this.crudService.getTypeById(id).subscribe({
      next: (response) =>{
        this.typeDocument = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }
  }


