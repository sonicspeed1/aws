import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from './gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private API_URL = 'http://localhost:3000/gastos'; 

  constructor(private http: HttpClient) {}

  
  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.API_URL);
  }


  createGasto(gasto: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(this.API_URL, gasto);
  }

 
  getGastoById(id: string): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.API_URL}/${id}`);
  }


  updateGasto(id: string, gasto: Gasto): Observable<Gasto> {
    return this.http.put<Gasto>(`${this.API_URL}/${id}`, gasto);
  }

  
  deleteGasto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}