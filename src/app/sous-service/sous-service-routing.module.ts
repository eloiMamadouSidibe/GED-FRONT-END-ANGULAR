import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authentificationGuard } from '../core/guards/authentification.guard';
import { SsIndexComponent } from './ss-index/ss-index.component';
import { SsAddComponent } from './ss-add/ss-add.component';
import { SsEditComponent } from './ss-edit/ss-edit.component';
import { SsDeleteComponent } from './ss-delete/ss-delete.component';
import { SsViewComponent } from './ss-view/ss-view.component';

const routes: Routes = [
  {path: '', component: SsIndexComponent,canActivate: [authentificationGuard]},
  {path: 'add', component: SsAddComponent,canActivate: [authentificationGuard]},
  {path: 'edit/:id', component: SsEditComponent,canActivate: [authentificationGuard]},
  {path: 'delete/:id', component: SsDeleteComponent,canActivate: [authentificationGuard]},
  {path: ':id', component: SsViewComponent,canActivate: [authentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SousServiceRoutingModule { }
