import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.register(this.email, this.password).subscribe(
      () => {
        // Redirecciona al usuario a la página deseada después del login
        alert("Usuario ya ingresado ");
        this.limpiar();
      },
      error => {
        console.error('Error en el login:', error);
        alert("Problema en el registro");
        // Manejo de errores de login
      }
    );
  }
  limpiar(){
    this.email= '';
  this.password= '';
  }
}
