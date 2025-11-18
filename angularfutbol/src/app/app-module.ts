/*
  Módulo principal de la aplicación: angularfutbol
  - Declara componentes: App, HomeComponent, PostfilesComponent, JugadoresComponent.
  - Importa módulos necesarios: BrowserModule, FormsModule, HttpClientModule y AppRoutingModule.
  - Bootstrap de la aplicación.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { PostfilesComponent } from './components/postfiles.component/postfiles.component';
import { JugadoresComponent } from './components/jugadores.component/jugadores.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    PostfilesComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}
