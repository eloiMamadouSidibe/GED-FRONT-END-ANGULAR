import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIndexComponent } from './u-index/u-index.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UViewComponent } from './u-view/u-view.component';
const routes: Routes = [
    {path: 'users', component: UIndexComponent},
    {path: 'edit/:login', component: UEditComponent},
    {path: 'users/:login', component: UViewComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }