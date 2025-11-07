import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuproductosComponent } from './components/menuproductos.component/menuproductos.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches.component/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes.component/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte.component/hijodeporte.component';
import { ComicComponent } from './components/comic.component/comic.component';
import { LibreriaComponent } from './components/libreria.component/libreria.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuproductosComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    ComicComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [
    provideHttpClient()
    ,provideBrowserGlobalErrorListeners(), appRoutingProvider, ServiceComics, 
  ],
  bootstrap: [App]
})
export class AppModule { }
