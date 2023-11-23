import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DAddComponent } from './d-add/d-add.component';
import { DIndexComponent } from './d-index/d-index.component';
import { DEditComponent } from './d-edit/d-edit.component';
import { DDeleteComponent } from './d-delete/d-delete.component';
import { DossierRoutingModule } from './dossier-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DViewComponent } from './d-view/d-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    DAddComponent,
    DIndexComponent,
    DEditComponent,
    DDeleteComponent,
    DViewComponent
  ],
  imports: [
    CommonModule,
    DossierRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class DossierModule { }
