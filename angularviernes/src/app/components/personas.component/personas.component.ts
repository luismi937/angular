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
    this.personasService.getPersonas().subscribe({
      next: (data) => this.personas = data,
      error: (err) => console.error('Error al cargar personas', err)
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
