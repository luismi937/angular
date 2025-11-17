/*
  Módulo principal de la aplicación: angularjuegos
  - Declara los componentes principales de la app (App, HomeComponent, PostfilesComponent).
  - Importa módulos esenciales: BrowserModule, Router (AppRoutingModule) y HttpClientModule para llamadas HTTP.
  - Punto de arranque (bootstrap) de la aplicación.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { PostfilesComponent } from './components/postfiles.component/postfiles.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    PostfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
