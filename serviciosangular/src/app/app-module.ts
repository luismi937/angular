import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicePersona } from './services/service.persona';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches-component/coches-component';
@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CochesComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    PersonasstandaloneComponent
  ],
  providers: [
    ServiceCoches,
    ServicePersona,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
