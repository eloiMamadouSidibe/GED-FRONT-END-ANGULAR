import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIndexComponent } from './u-index/u-index.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UEditComponent } from './u-edit/u-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UViewComponent } from './u-view/u-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    UIndexComponent,
    UEditComponent,
    UViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
