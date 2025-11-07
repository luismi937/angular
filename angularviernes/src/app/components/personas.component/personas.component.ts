import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PersonasService } from '../../services/personas.services';
import { Persona } from '../../../models/persona.model';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar por defecto con HttpClient
    this.loadWithHttp();
  }

  goHome() {
    this.router.navigate(['/']);
  }

  // 1️⃣ HttpClient
  loadWithHttp() {
    this.personasService.getPersonasHttp().subscribe({
      next: (data) => this.personas = data,
      error: (err) => console.error('Error HttpClient:', err)
    });
  }

  // 2️⃣ Axios
  async loadWithAxios() {
    this.personas = await this.personasService.getPersonasAxios();
  }

  // 3️⃣ Fetch API
  async loadWithFetch() {
    this.personas = await this.personasService.getPersonasFetch();
  }
}
