import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../_service/crud.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-t-d-add',
  templateUrl: './t-d-add.component.html',
  styleUrls: ['./t-d-add.component.scss']
})
export class TdAddComponent implements OnInit{
typeDocumentForm!: FormGroup
constructor(private crudService: CrudService, private route: Router, private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.typeDocumentForm = this.formBuilder.group({
      code: [null],
      libelle: [null]
    }

    )
  }
  onSubmit(): void{
     this.crudService.addType(this.typeDocumentForm.value).pipe(
      tap(() => this.route.navigateByUrl('type-document'))
    ).subscribe()
  }

}
