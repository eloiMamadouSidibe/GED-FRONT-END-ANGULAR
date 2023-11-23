import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIndexComponent } from './r-index/r-index.component';
import { REditComponent } from './r-edit/r-edit.component';
import { RAddComponent } from './r-add/r-add.component';
import { RDeleteComponent } from './r-delete/r-delete.component';
import { RayonRoutingModule } from './rayon-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RViewComponent } from './r-view/r-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    RIndexComponent,
    REditComponent,
    RAddComponent,
    RDeleteComponent,
    RViewComponent
  ],
  imports: [
    CommonModule,
    RayonRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class RayonModule { }
