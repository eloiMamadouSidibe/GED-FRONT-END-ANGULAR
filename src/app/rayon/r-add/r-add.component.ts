import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../_service/crud.service';
import { CrudService as SalleCrudService } from '../../salle/_service/crud.service';

@Component({
  selector: 'app-r-add',
  templateUrl: './r-add.component.html',
  styleUrls: ['./r-add.component.scss']
})
export class RAddComponent {
  rayonForm!: FormGroup;
  salles!: any[];


  constructor(private route: Router, private crudService: CrudService,private formBuilder: FormBuilder,
    private salleCrudService: SalleCrudService){}

  ngOnInit(): void {
    this.loadSalle();
    this.rayonForm = this.formBuilder.group({
      code: [null],
      nom: [null],
      salle: [null]
    })
  }
  loadSalle(): void{
    this.salleCrudService.getAllSalle().subscribe({
      next: (response) => {
        this.salles = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }
  onSubmit(){
     this.crudService.addRayon(this.rayonForm.value).subscribe({
      next: () => {
        this.route.navigateByUrl('rayon')
      },
      error: (error) => {
        console.log(error)
      }

    })
   

  }

}
