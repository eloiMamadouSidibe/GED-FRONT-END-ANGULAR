import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsEditComponent } from './ss-edit/ss-edit.component';
import { SsAddComponent } from './ss-add/ss-add.component';
import { SsDeleteComponent } from './ss-delete/ss-delete.component';
import { SsIndexComponent } from './ss-index/ss-index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SousServiceRoutingModule } from './sous-service-routing.module';
import { SsViewComponent } from './ss-view/ss-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    SsEditComponent,
    SsAddComponent,
    SsDeleteComponent,
    SsIndexComponent,
    SsViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SousServiceRoutingModule,
    MatPaginatorModule
  ]
})
export class SousServiceModule { }
