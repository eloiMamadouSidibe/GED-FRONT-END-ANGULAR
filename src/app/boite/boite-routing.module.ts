import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { BIndexComponent } from './b-index/b-index.component';
import { BAddComponent } from './b-add/b-add.component';
import { BEditComponent } from './b-edit/b-edit.component';
import { BDeleteComponent } from './b-delete/b-delete.component';
import { BViewComponent } from './b-view/b-view.component';

const routes: Routes = [
  {path: '', component: BIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: BAddComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: BEditComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: BDeleteComponent,canActivate: [authentificationGuard]},
  {path: ':id', component: BViewComponent,canActivate: [authentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoiteRoutingModule { }
