import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Process } from 'src/app/core/model/process';
import { CrudService } from '../_service/crud.service';

@Component({
  selector: 'app-p-edit',
  templateUrl: './p-edit.component.html',
  styleUrls: ['./p-edit.component.scss']
})
export class PEditComponent implements OnInit{
  process: Process = new Process()
  processForm!: FormGroup;
  constructor(private route: Router, private activeRoute:ActivatedRoute, private crudService: CrudService,
    private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.processForm = this.formBuilder.group({
      id: [null],
      code: [null],
      nom: [null]
    })
    this.preFill()
    
  }
  preFill(): void{
    const id: number = this.activeRoute.snapshot.params['id']
    this.crudService.getProcessById(id).subscribe({
      next: (response) =>{
        this.process.id = response.id
        this.process.code = response.code;
        this.process.nom = response.nom;
        this.processForm.setValue(this.process)

      },
      error: (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })
  }
  onSubmit(){
    this.crudService.editProcess(this.processForm.value).subscribe({
      next: () =>{
        this.route.navigateByUrl('process')

      },
      error : (error) =>{
        console.log("Une erreu s'est produite",error)
      }
    })

  }

}
