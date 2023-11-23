import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { RIndexComponent } from './r-index/r-index.component';
import { RAddComponent } from './r-add/r-add.component';
import { REditComponent } from './r-edit/r-edit.component';
import { RDeleteComponent } from './r-delete/r-delete.component';
import { RViewComponent } from './r-view/r-view.component';

const routes: Routes = [
  {path: '', component: RIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: RAddComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: REditComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: RDeleteComponent,canActivate: [authentificationGuard]},
  {path: ':id',component:RViewComponent, canActivate: [authentificationGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RayonRoutingModule { }
