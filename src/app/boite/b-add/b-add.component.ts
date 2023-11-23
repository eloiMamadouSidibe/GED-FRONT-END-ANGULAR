import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';
import { CrudService as RayonCrudService } from 'src/app/rayon/_service/crud.service';

@Component({
  selector: 'app-b-add',
  templateUrl: './b-add.component.html',
  styleUrls: ['./b-add.component.scss']
})
export class BAddComponent {
  boiteForm!: FormGroup;
  rayons!: any[];


  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder,
    private rayonCrudService: RayonCrudService){}

  ngOnInit(): void {
    this.loadRayon();
    this.boiteForm = this.formBuilder.group({
      code: [null],
      capacite: [null],
      rayon: [null]
    })
  }
  loadRayon(): void{
    this.rayonCrudService.getAllRayon().subscribe({
      next: (response) => {
        this.rayons = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }
  onSubmit(){
     this.crudService.addBoite(this.boiteForm.value).subscribe({
      next: () => {
        this.route.navigateByUrl('boite')
        
      },
      error: (error) => {
        console.log(error)
      }

    })
   

  }

}
