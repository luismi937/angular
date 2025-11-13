import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { JugadoresComponent } from './components/jugadores.component/jugadores.component';
import { PostfilesComponent } from './components/postfiles.component/postfiles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'postfiles', component: PostfilesComponent },
  { path: '**', redirectTo: '' } // cualquier otra ruta va a Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
