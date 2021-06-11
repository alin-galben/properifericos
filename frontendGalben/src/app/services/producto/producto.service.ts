import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto/producto.model';

const API_URL = 'http://localhost:8000/productos/';
const API_URL_ADMIN = 'http://localhost:8000/admin/productos';
const API_CATEGORIA = 'http://localhost:8000/productos/categoria/';


const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_URL);
  }

  getAllAdmin(): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_URL_ADMIN);
  }

  get(id: any): Observable<Producto> {
    return this.http.get(API_URL+id);
  }

  getAllCategoria(categoria: any): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_CATEGORIA+categoria);
  }


  create(nombre: string, categoria: string, descripcion: any, imagen: any): Observable<any> {
    return this.http.post(API_URL, {
      nombre,
      categoria,
      descripcion,
      imagen
    }, httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(API_URL+id);
  }

}
