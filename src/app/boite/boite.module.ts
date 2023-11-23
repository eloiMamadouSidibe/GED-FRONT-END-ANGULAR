import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoiteRoutingModule } from './boite-routing.module';
import { BAddComponent } from './b-add/b-add.component';
import { BDeleteComponent } from './b-delete/b-delete.component';
import { BEditComponent } from './b-edit/b-edit.component';
import { BIndexComponent } from './b-index/b-index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BViewComponent } from './b-view/b-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    BAddComponent,
    BDeleteComponent,
    BEditComponent,
    BIndexComponent,
    BViewComponent
  ],
  imports: [
    CommonModule,
    BoiteRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class BoiteModule { }
