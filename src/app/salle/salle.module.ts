import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaDeleteComponent } from './sa-delete/sa-delete.component';
import { SaEditComponent } from './sa-edit/sa-edit.component';
import { SaAddComponent } from './sa-add/sa-add.component';
import { SaIndexComponent } from './sa-index/sa-index.component';
import { SalleRoutingModule } from './salle-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SaViewComponent } from './sa-view/sa-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    SaDeleteComponent,
    SaEditComponent,
    SaAddComponent,
    SaIndexComponent,
    SaViewComponent
  ],
  imports: [
    CommonModule,
    SalleRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class SalleModule { }
