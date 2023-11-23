import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-se-add',
  templateUrl: './se-add.component.html',
  styleUrls: ['./se-add.component.scss']
})
export class SeAddComponent implements OnInit {
  serviceForm!: FormGroup
  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.serviceForm = this.formBuilder.group({
      code: [null],
      nom: [null]
    })
  }
  onSubmit(){
    this.crudService.addService(this.serviceForm.value).subscribe({
      next:() =>{
        this.route.navigateByUrl('service')
      },
      error: (error) =>{
        console.log('Une erreur s\'est produite',error)
      }
    })
  }
  

}
