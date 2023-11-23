import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { PIndexComponent } from './p-index/p-index.component';
import { PAddComponent } from './p-add/p-add.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { PDeleteComponent } from './p-delete/p-delete.component';
import { PViewComponent } from './p-view/p-view.component';

const routes: Routes = [
  {path: '', component: PIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: PAddComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: PEditComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: PDeleteComponent,canActivate: [authentificationGuard]},
  {path: ':id',component: PViewComponent,canActivate: [authentificationGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
