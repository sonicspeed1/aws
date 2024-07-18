import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        catchError((error) => {
          // Aquí puedes manejar errores específicos, como mostrar un mensaje de error al usuario
          console.error('Error en login:', error);
          return throwError(error);  // Propaga el error hacia arriba
        })
      );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password })
      .pipe(
        catchError((error) => {
          // Aquí puedes manejar errores específicos, como mostrar un mensaje de error al usuario
          console.error('Error en registro:', error);
          return throwError(error);  // Propaga el error hacia arriba
        })
      );
  }

  logout(): void {
    this.localStorageService.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.localStorageService.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.localStorageService.getItem('token');
  }

  setToken(token: string): void {
    this.localStorageService.setItem('token', token);
  }
}