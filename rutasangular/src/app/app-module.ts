import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // ✅ necesario para *ngFor, *ngIf
import { RouterModule } from '@angular/router'; // ✅ necesario para routerLink

import { App } from './app';
import { routing, appRoutingProvider } from './app.routing';

// 🔹 Componentes
import { MenuComponent } from './components/menu.component/menu.component';

// 🔹 Componentes standalone
import { TablamultiplicarroutingComponent } from './components/tablamultiplicarrouting.component/tablamultiplicarrouting.component';
import { MenutablamultiplicarComponent } from './components/menutablamultiplicar.component/menutablamultiplicar.component';

@NgModule({
  declarations: [
    App,
    // Los standalone NO van aquí
    // Otros componentes antiguos si los necesitas
  ],
  imports: [
    BrowserModule,
    CommonModule, // ✅ para *ngFor, *ngIf
    RouterModule, // ✅ para routerLink
    routing,

    // 🔹 Importar los componentes standalone
    MenuComponent,
    TablamultiplicarroutingComponent,
    MenutablamultiplicarComponent
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
