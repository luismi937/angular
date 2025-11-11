import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Componentes
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { CochesComponent } from './components/coches-component/coches-component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncioncsimple.components/plantillafuncioncsimple.components';

// Servicios
import { ServicePersona } from './services/service.persona';
import { ServiceCoches } from './services/service.coches';
import { ServicePlantillas } from './services/service.plantilla';

// Módulos adicionales
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonasstandaloneComponent,
  ],
  providers: [
    ServicePersona,
    ServiceCoches,
    ServicePlantillas,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
