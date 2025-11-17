/*
  Componente: PostfilesComponent
  Descripción: Permite seleccionar y subir un archivo al endpoint de la API.
  Campos:
    - apiUrl: URL base de la API tomada de environment
    - selectedFile: archivo seleccionado por el usuario
    - message: mensaje informativo para el usuario
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-postfiles',
  templateUrl: './postfiles.component.html',
  styleUrls: ['./postfiles.component.css'],
  standalone: false
})
export class PostfilesComponent implements OnInit {
  apiUrl = environment.urlApiFutbol;
  // `selectedFile` almacena el archivo seleccionado por el usuario.
  // Tipo: `File | null` significa que puede contener un objeto File
  // (cuando el usuario selecciona un archivo) o `null` cuando no
  // hay ningún archivo seleccionado. Inicializamos a `null` para
  // indicar estado vacío.
  // Uso típico: al cambiar el input file se asigna el File a esta
  // variable y luego se usa para enviarlo al servidor (o crear FormData).
  selectedFile: File | null = null;
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // ngOnInit: se ejecuta al crear el componente.
    // Aquí solo registramos la URL base de la API en consola como
    // acción de inicialización ligera. En componentes más complejos
    // aquí se lanzarían llamadas para traer datos iniciales.
    console.log('API base:', this.apiUrl);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.message = 'Selecciona un archivo primero.';
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post(`${this.apiUrl}upload`, formData).subscribe({
      next: () => this.message = 'Archivo subido correctamente ✅',
      error: () => this.message = '❌ Error al subir archivo.'
    });
  }
}
