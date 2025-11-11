import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Componentes
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone.component/personasstandalone.component';
import { CochesComponent } from './components/coches-component/coches-component';
import { Plantilla } from '../models/plantilla';

// Servicios
import { ServicePersona } from './services/service.persona';
import { ServiceCoches } from './services/service.coches';
import { ServicePlantilla } from './services/service.plantilla';

// Módulos adicionales
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PlantillaSimpleComponent } from './components/plantillafuncioncsimple.components/plantillafuncioncsimple.components';
import { PlantillaMultipleComponent } from './components/plantillamultiple/component/component';

@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CochesComponent,
    PlantillaSimpleComponent,
    PlantillaMultipleComponent
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
    ServicePlantilla,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
