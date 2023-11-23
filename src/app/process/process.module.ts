import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDeleteComponent } from './p-delete/p-delete.component';
import { PAddComponent } from './p-add/p-add.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { PIndexComponent } from './p-index/p-index.component';
import { ProcessRoutingModule } from './process-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PViewComponent } from './p-view/p-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    PDeleteComponent,
    PAddComponent,
    PEditComponent,
    PIndexComponent,
    PViewComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class ProcessModule { }
