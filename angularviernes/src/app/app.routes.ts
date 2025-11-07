import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home.component';
import { PersonasComponent } from './../app/components/personas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personas', component: PersonasComponent }
];
