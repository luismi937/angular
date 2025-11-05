import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { hooksangular } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { Deportesv2Component } from '../components/deportesv2/deportesv2.component';
import { FormsModule } from '@angular/forms';
import { FormsBinding } from '../components/formsbinding/formsbinding.component';
import { sumarNumeros } from '../components/sumarnumeroscomponent/sumarnumeroscomponent';
import { Prueba } from './components/prueba/prueba';
import { Prueba2Component } from './components/prueba2.component/prueba2.component';
import { TestComponent } from '../components/test.component/test.component';
import { TablamultiplicarComponent } from '../components/tablamultiplicar.component/tablamultiplicar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    hooksangular,
    DeportesComponent,
    Deportesv2Component,
    FormsBinding,
    sumarNumeros,
    Prueba,
    Prueba2Component,
    TestComponent
    // ❌ TablamultiplicarComponent eliminado de declarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TablamultiplicarComponent // ✅ standalone importado aquí
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
