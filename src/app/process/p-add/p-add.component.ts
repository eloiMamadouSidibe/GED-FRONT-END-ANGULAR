import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.scss']
})
export class PAddComponent {
  processForm!: FormGroup
  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.processForm = this.formBuilder.group({
      code: [null],
      nom: [null]
    })
  }
  onSubmit(){
    this.crudService.addProcess(this.processForm.value).subscribe({
      next:() =>{
        this.route.navigateByUrl('process')
      },
      error: (error) =>{
        console.log('Une erreur s\'est produite',error)
      }
    })
  }

}
