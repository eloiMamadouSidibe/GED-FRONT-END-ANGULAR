import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authentificationGuard } from './core/guards/authentification.guard';
const routes: Routes = [

    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent,canActivate:[authentificationGuard]},
    {path: 'core', loadChildren: () => import('./core/core.module')
    .then(m => m.CoreModule)},
    {path: 'type-document', loadChildren: () => import('./type-document/type-document.module')
    .then(m => m.TypeDocumentModule)},
    {path: 'user', loadChildren: () => import('./authentification/authentification.module')
    .then(m => m.AuthentificationModule)},
     {path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)},
     {path : 'sous-service', loadChildren: () => import('./sous-service/sous-service.module')
     .then(m => m.SousServiceModule)},
     {path: 'salle', loadChildren: () => import('./salle/salle.module').then(m => m.SalleModule)},
     {path: 'rayon', loadChildren: () => import('./rayon/rayon.module').then(m => m.RayonModule)},
     {path: 'process', loadChildren: () => import('./process/process.module').then(m => m.ProcessModule)},
     {path: 'boite', loadChildren: () => import('./boite/boite.module').then(m => m.BoiteModule)},
     {path: 'dossier', loadChildren: () => import('./dossier/dossier.module').then(m => m.DossierModule)},
     {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
