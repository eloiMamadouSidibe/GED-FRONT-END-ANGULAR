import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoiteModule } from './boite/boite.module';
import { DossierModule } from './dossier/dossier.module';
import { ProcessModule } from './process/process.module';
import { RayonModule } from './rayon/rayon.module';
import { SalleModule } from './salle/salle.module';
import { ServiceModule } from './service/service.module';
import { SousServiceModule } from './sous-service/sous-service.module';
import { TypeDocumentModule } from './type-document/type-document.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { MenuComponent } from './core/components/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from './core/Internationalization/custom-paginator';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeDocumentModule,
    AuthentificationModule,
    CoreModule,
    HttpClientModule,
    BoiteModule,
    DossierModule,
    ProcessModule,
    RayonModule,
    SalleModule,
    ServiceModule,
    SousServiceModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
