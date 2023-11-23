import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rayon } from 'src/app/core/model/rayon';
import { CrudService } from '../_service/crud.service';
import { CrudService as SalleCrudService } from '../../salle/_service/crud.service';

@Component({
  selector: 'app-r-edit',
  templateUrl: './r-edit.component.html',
  styleUrls: ['./r-edit.component.scss']
})
export class REditComponent {
  rayon: Rayon = new Rayon()
  rayonForm!: FormGroup;
  salles!: any[]
  constructor(private route: Router, private activeRoute:ActivatedRoute, private crudService: CrudService,
    private formBuilder: FormBuilder,private salleCrudService: SalleCrudService ){}
  ngOnInit(): void {
    this.loadSalle();
    this.rayonForm = this.formBuilder.group({
      id: [null],
      code: [null],
      nom: [null],
      salle: [null]
    });
    
    this.preFill()
    
  }
  preFill(): void{
    const id: number = this.activeRoute.snapshot.params['id']
    this.crudService.getRayonById(id).subscribe({
      next: (response) =>{
        this.rayon.id = response.id
        this.rayon.code = response.code;
        this.rayon.nom = response.nom;
        this.rayon.salle = response.salle
        this.rayonForm.setValue(this.rayon);
      },
      error: (error) =>{
        console.log("Une erreu s'est produite",error)
      }
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
    this.crudService.editRayon(this.rayonForm.value).subscribe({
      next: () =>{
        this.route.navigateByUrl('rayon')

      },
      error : (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })

  }

}
