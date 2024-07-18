import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); // Almacena el token en localStorage
        this.router.navigate(['/registro']); // Redirige a la página principal o a la ruta deseada después del inicio de sesión
      },
      (error) => {
        this.errorMessage = 'Correo electrónico o contraseña incorrectos';
      }
    );
  }
}