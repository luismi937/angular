/*
  Componente: PostfilesComponent (angularjuegos)
  - Permite seleccionar y subir archivos al backend como Base64.
  - Usa HttpClient para enviar datos y `environment` para la URL base.
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-postfiles',
  templateUrl: './postfiles.component.html',
  styleUrls: ['./postfiles.component.css']
})
export class PostfilesComponent implements OnInit {

  apiUrl = environment.apiUrl;
  selectedFileName = '';
  message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // ngOnInit se ejecuta una vez después de que Angular inicializa
    // las propiedades enlazadas del componente (por ejemplo, @Input()).
    // Aquí se utiliza para realizar una acción de inicialización simple:
    // imprimimos en consola la URL base de la API usada por este componente.
    // Usos típicos de ngOnInit en componentes reales:
    // - lanzar peticiones para cargar datos iniciales
    // - inicializar observables o suscripciones
    // - ejecutar lógica que requiere que los bindings estén resueltos
    console.log('API base:', this.apiUrl);
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (!file) {
      this.message = 'Selecciona un archivo primero.';
      return;
    }
    this.selectedFileName = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = (reader.result as string).split(',')[1];
      this.uploadBase64File(base64String, file.name);
    };
    reader.onerror = () => { this.message = 'Error leyendo el archivo.'; };
    reader.readAsDataURL(file);
  }

  uploadBase64File(base64String: string, filename: string): void {
    const payload = { filename, filedata: base64String };
    this.http.post(`${this.apiUrl}uploadBase64`, payload).subscribe({
      next: () => this.message = `Archivo '${filename}' subido correctamente ✅`,
      error: () => this.message = `❌ Error al subir archivo '${filename}'.`
    });
  }
}
