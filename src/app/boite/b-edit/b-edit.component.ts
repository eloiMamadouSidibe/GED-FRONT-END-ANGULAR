import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boite } from 'src/app/core/model/boite';
import { CrudService } from '../_service/crud.service';
import { CrudService as RayonCrudService } from 'src/app/rayon/_service/crud.service';

@Component({
  selector: 'app-b-edit',
  templateUrl: './b-edit.component.html',
  styleUrls: ['./b-edit.component.scss']
})
export class BEditComponent {
  boite: Boite = new Boite()
  boiteForm!: FormGroup;
  rayons!: any[]
  constructor(private route: Router, private activeRoute:ActivatedRoute, private crudService: CrudService,
    private formBuilder: FormBuilder,private rayonCrudService: RayonCrudService ){}
  ngOnInit(): void {
    this.loadRayon();
    this.boiteForm = this.formBuilder.group({
      id: [null],
      code: [null],
      capacite: [null],
      rayon: [null]
    });
   
    this.preFill()
    
  }
  preFill(): void{
    const id: number = this.activeRoute.snapshot.params['id']
    this.crudService.getBoiteById(id).subscribe({
      next: (response) =>{
        this.boite.id = response.id
        this.boite.code = response.code;
        this.boite.capacite = response.capacite;
        this.boite.rayon = response.rayon
        this.boiteForm.setValue(this.boite);
      },
      error: (error) =>{
        console.log("Une erreu s'est produite",error)
      }
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
    this.crudService.editBoite(this.boiteForm.value).subscribe({
      next: () =>{
        this.route.navigateByUrl('boite')

      },
      error : (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })

  }

}
