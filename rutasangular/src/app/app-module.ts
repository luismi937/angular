import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { CineComponent } from './components/cine.component/cine.component';
import { MusicaComponent } from './components/musica.component/musica.component';
import { HomeComponent } from './components/home.component/home.component';
import { routing, appRoutingProvider } from './app.routing';
import { MenuComponent } from './components/menu.component/menu.component';
import { NotfoundComponent } from './components/notfound.component/notfound.component';


@NgModule({
  declarations: [
    App,
    CineComponent,
    MusicaComponent,
    HomeComponent,
    MenuComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
