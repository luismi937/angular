/*
  Módulo de enrutamiento: angularempleadosauth
  - Rutas para autenticación y gestión de perfil: login, perfil y subordinados.
  - Home como ruta raíz.
  - AuthService proporciona lógica de autenticación usada por componentes.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { SubordinadosComponent } from './components/subordinados.component/subordinados.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'subordinados', component: SubordinadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
