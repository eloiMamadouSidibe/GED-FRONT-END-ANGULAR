import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { DIndexComponent } from './d-index/d-index.component';
import { DAddComponent } from './d-add/d-add.component';
import { DEditComponent } from './d-edit/d-edit.component';
import { DDeleteComponent } from './d-delete/d-delete.component';
import { DViewComponent } from './d-view/d-view.component';

const routes: Routes = [
  {path: '', component: DIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: DAddComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: DEditComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: DDeleteComponent,canActivate: [authentificationGuard]},
  {path: ':id', component: DViewComponent, canActivate: [authentificationGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossierRoutingModule { }
