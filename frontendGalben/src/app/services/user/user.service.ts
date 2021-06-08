import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user.model';

const API_URL = 'http://localhost:8000/api/test';
const API_URL_USERS = 'http://localhost:8000/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(API_URL_USERS);
  }

  get(id: any): Observable<User[]>{
    return this.http.get<User[]>('${API_URL_USERS}/${id}');
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put('${API_URL_USERS}/${id}', data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('${API_URL_USERS}/${id}');
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + '/user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '/admin', { responseType: 'text' });
  }
}
