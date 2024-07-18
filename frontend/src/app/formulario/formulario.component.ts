import { Component } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../gasto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  ruc: string = '';
  valor: number | null = null;
  empresa: string = '';
  gasto: string = '';

  constructor(private gastoService: GastoService) {}

  guardarFactura() {
    if (this.ruc.length !== 12) {
      alert('El RUC debe tener exactamente 12 caracteres.');
      return;
    }

    const nuevoGasto: Gasto = {
      ruc: this.ruc,
      valor: this.valor!,
      empresa: this.empresa,
      gasto: this.gasto
    };

    this.gastoService.createGasto(nuevoGasto).subscribe(
      (response) => {
        console.log('Gasto creado exitosamente', response);
        // Limpiar el formulario después de guardar
        this.limpiarFormulario();
      },
      (error) => {
        console.error('Error al crear el gasto', error);
      }
    );
  }

  limpiarFormulario() {
    this.ruc = '';
    this.valor = null;
    this.empresa = '';
    this.gasto = '';
  }
}