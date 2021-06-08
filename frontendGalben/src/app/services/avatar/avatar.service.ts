import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avatar } from '../../models/avatar/avatar.model';

const API_URL = 'http://localhost:8000/avatares/';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Avatar[]> {
    return this.http.get<Avatar[]>(API_URL);
  }

  get(id: any): Observable<Avatar> {
    return this.http.get(API_URL+id);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(API_URL+id, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(API_URL+id);
  }
}
