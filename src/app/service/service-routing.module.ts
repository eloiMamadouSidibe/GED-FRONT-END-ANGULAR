import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeIndexComponent } from './se-index/se-index.component';
import { SeAddComponent } from './se-add/se-add.component';
import { SeDeleteComponent } from './se-delete/se-delete.component';
import { SeEditComponent } from './se-edit/se-edit.component';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { SeViewComponent } from './se-view/se-view.component';

const routes: Routes = [
  {path: '', component: SeIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: SeAddComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: SeDeleteComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: SeEditComponent,canActivate: [authentificationGuard]},
  {path: ':id', component: SeViewComponent,canActivate: [authentificationGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
