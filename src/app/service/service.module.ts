import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeIndexComponent } from './se-index/se-index.component';
import { SeDeleteComponent } from './se-delete/se-delete.component';
import { SeAddComponent } from './se-add/se-add.component';
import { SeEditComponent } from './se-edit/se-edit.component';
import { ServiceRoutingModule } from './service-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SeViewComponent } from './se-view/se-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    SeIndexComponent,
    SeDeleteComponent,
    SeAddComponent,
    SeEditComponent,
    SeViewComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class ServiceModule { }
