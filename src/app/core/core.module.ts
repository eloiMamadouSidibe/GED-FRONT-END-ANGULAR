import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProvider } from './interceptors';
import { MenuComponent } from './components/menu/menu.component';
import { CoreRoutingModule } from './core-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatPaginatorModule
  ],
  
  providers: [HttpInterceptorProvider]
})
export class CoreModule { }
