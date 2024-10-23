import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
  }

  get(route: string, params?: any): Observable<any> {
    const url = `${this.baseUrl}/${route}`;
    return this.http.get(url, {params});
  }

  post(route: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/${route}`;
    return this.http.post(url, data);
  }

  put(route: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/${route}`;
    return this.http.put(url, data);
  }

  delete(route: string): Observable<any> {
    const url = `${this.baseUrl}/${route}`;
    return this.http.delete(url);
  }
}