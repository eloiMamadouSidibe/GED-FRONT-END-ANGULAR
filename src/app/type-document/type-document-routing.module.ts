import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdIndexComponent } from './t-d-index/t-d-index.component';
import { TdAddComponent } from './t-d-add/t-d-add.component';
import { TdEditComponent } from './t-d-edit/t-d-edit.component';
import { TdDeleteComponent } from './t-d-delete/t-d-delete.component';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { TDViewComponent } from './t-d-view/t-d-view.component';

const routes: Routes = [
  {path: '', component: TdIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: TdAddComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: TdEditComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: TdDeleteComponent,canActivate: [authentificationGuard]},
  {path: ':id', component: TDViewComponent,canActivate: [authentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeDocumentRoutingModule { }
