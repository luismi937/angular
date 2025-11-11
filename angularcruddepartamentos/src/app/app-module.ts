import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DepartamentosComponentComponent } from './components/departamentos-component.component/departamentos-component.component';
import { MenuComponentComponent } from './components/menu-component.component/menu-component.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import ServiceDepartamentos from '../services/service.departamentos';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';

@NgModule({
  declarations: [
    App,
    DepartamentosComponentComponent,
    MenuComponentComponent,
    CreateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceDepartamentos,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
