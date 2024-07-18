import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html'
})
export class ProtectedComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get('http://localhost:3000/private-task', { headers }).subscribe(
      (response: any) => {
        this.data = response; // Aquí se manejan los datos obtenidos de la ruta protegida
      },
      error => {
        console.error('Error al obtener los datos protegidos:', error);
      }
    );
  }
}