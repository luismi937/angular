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
  selectedFile: File | null = null;
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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
