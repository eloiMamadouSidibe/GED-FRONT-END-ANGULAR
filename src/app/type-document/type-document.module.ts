import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdIndexComponent } from './t-d-index/t-d-index.component';
import { TdAddComponent } from './t-d-add/t-d-add.component';
import { TdDeleteComponent } from './t-d-delete/t-d-delete.component';
import { TdEditComponent } from './t-d-edit/t-d-edit.component';
import { TypeDocumentRoutingModule } from './type-document-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TDViewComponent } from './t-d-view/t-d-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    TdIndexComponent,
    TdAddComponent,
    TdDeleteComponent,
    TdEditComponent,
    TDViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TypeDocumentRoutingModule,
    MatPaginatorModule
  ],
  
})
export class TypeDocumentModule { }
