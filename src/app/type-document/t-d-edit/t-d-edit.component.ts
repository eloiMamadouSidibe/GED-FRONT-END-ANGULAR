import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../_service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeDocument } from 'src/app/core/model/type-document';

@Component({
  selector: 'app-t-d-edit',
  templateUrl: './t-d-edit.component.html',
  styleUrls: ['./t-d-edit.component.scss']
})
export class TdEditComponent {
  typeDocumentForm!: FormGroup;
  private id!: number;
  typeDocument: TypeDocument = new TypeDocument()
  
  constructor(private crudService: CrudService, private route: Router
    , private activateRoute: ActivatedRoute, private formBuilder: FormBuilder){}
    
  ngOnInit(): void {
     this.id = +this.activateRoute.snapshot.params['id'];
    this.crudService.getTypeById(this.id).subscribe(
      (data) =>{
        this.typeDocument.id = data.id;
        this.typeDocument.code = data.code;
        this.typeDocument.libelle = data.libelle;
        this.typeDocumentForm.setValue(this.typeDocument);
        
      }
    )
    this.typeDocumentForm = this.formBuilder.group({
      id: [null],
      code: [null],
      libelle: [null]
    })
  }
  
  onSubmit(){
    this.crudService.editType(this.typeDocumentForm.value).subscribe({
    next : () => {
        this.route.navigateByUrl('type-document')
      },
     error : (error) =>{
        console.log('Une erreur s\'est produite',error)
      }
  });
    
  }

}
