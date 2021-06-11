import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avatar } from '../../models/avatar/avatar.model';

const API_URL = 'http://localhost:8000/avatares/';
const API_URL_ADMIN = 'http://localhost:8000/avatares/admin';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Avatar[]> {
    return this.http.get<Avatar[]>(API_URL);
  }

  getAllAdmin(): Observable<Avatar[]> {
    return this.http.get<Avatar[]>(API_URL_ADMIN);
  }

  get(id: any): Observable<Avatar> {
    return this.http.get(API_URL+id);
  }


  create(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', API_URL, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(API_URL+id);
  }
}
