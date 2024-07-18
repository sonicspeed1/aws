import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { ImpuestoService } from '../impuesto.service';
import { Gasto } from '../gasto';
import { Impuesto } from '../impuesto';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  gastos: Gasto[] = [];
  impuestos: Impuesto[] = [];

  constructor(private gastoService: GastoService, private impuestoService: ImpuestoService) {}

  ngOnInit(): void {
    this.obtenerGastos();
    this.obtenerImpuestos(); // Corregido el nombre del método aquí
  }

  obtenerGastos(): void {
    this.gastoService.getGastos().subscribe(
      (response: Gasto[]) => {
        this.gastos = response;
      },
      (error) => {
        console.error('Error al obtener los gastos:', error);
      }
    );
  }

  obtenerImpuestos(): void { 
    this.impuestoService.getimpuestos().subscribe(
      (response: Impuesto[]) => {
        this.impuestos = response;
      },
      (error) => {
        console.error('Error al obtener los impuestos:', error);
      }
    );
  }
}