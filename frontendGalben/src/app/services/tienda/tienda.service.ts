import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../../models/tienda/tienda.model';

const API_URL = 'http://localhost:8000/tiendas/';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(API_URL);
  }
}
