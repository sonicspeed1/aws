import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Impuesto } from './impuesto';

@Injectable({
  providedIn: 'root'
})
export class ImpuestoService {

  private API_URL = 'http://localhost:3000/impuestos'; 

  constructor(private http: HttpClient) {}

  
  getimpuestos(): Observable<Impuesto[]> {
    return this.http.get<Impuesto[]>(this.API_URL);
  }


  createimpuestos(gasto: Impuesto): Observable<Impuesto> {
    return this.http.post<Impuesto>(this.API_URL, gasto);
  }

 
  getimpuestosById(id: string): Observable<Impuesto> {
    return this.http.get<Impuesto>(`${this.API_URL}/${id}`);
  }


  updateimpuestos(id: string, gasto: Impuesto): Observable<Impuesto> {
    return this.http.put<Impuesto>(`${this.API_URL}/${id}`, gasto);
  }

  
  deleteimpuestos(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
