import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enlace } from '../../models/enlace/enlace.model';

const API_URL = 'http://localhost:8000/enlaces/';

const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EnlaceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Enlace[]> {
    return this.http.get<Enlace[]>(API_URL);
  }

  getAllAdmin(): Observable<Enlace[]> {
    return this.http.get<Enlace[]>(API_URL);
  }

  get(id: any): Observable<Enlace> {
    return this.http.get(API_URL+id);
  }


  create(enlace: string, precio: string, tiendaId:any, productoId: any): Observable<any> {
    return this.http.post(API_URL, {
      enlace,
      precio,
      tiendaId,
      productoId
    }, httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(API_URL+id);
  }
}
