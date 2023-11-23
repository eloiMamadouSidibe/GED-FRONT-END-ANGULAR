import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-sa-add',
  templateUrl: './sa-add.component.html',
  styleUrls: ['./sa-add.component.scss']
})
export class SaAddComponent {
  salleForm!: FormGroup
  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.salleForm = this.formBuilder.group({
      code: [null],
      superficie: [null]
    })
  }
  onSubmit(){
    this.crudService.addSalle(this.salleForm.value).subscribe({
      next:() =>{
        this.route.navigateByUrl('salle')
      },
      error: (error) =>{
        console.log('Une erreur s\'est produite',error)
      }
    })
  }

}
