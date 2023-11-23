import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { SaIndexComponent } from './sa-index/sa-index.component';
import { SaAddComponent } from './sa-add/sa-add.component';
import { SaDeleteComponent } from './sa-delete/sa-delete.component';
import { SaEditComponent } from './sa-edit/sa-edit.component';
import { SaViewComponent } from './sa-view/sa-view.component';

const routes: Routes = [
  {path: '', component: SaIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: SaAddComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: SaDeleteComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: SaEditComponent,canActivate: [authentificationGuard]},
  {path: ':id', component: SaViewComponent, canActivate: [authentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalleRoutingModule { }
