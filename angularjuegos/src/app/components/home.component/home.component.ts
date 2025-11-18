/*
  Componente: HomeComponent (angularjuegos)
  - Página de bienvenida de la app.
  - Componente estático usado como ruta principal ('home').
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Bienvenido a Angular Juegos 🎮</h1>
    <p>Usa el menú para subir archivos o navegar por la aplicación.</p>
  `
})
export class HomeComponent { }
