import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseURL = 'http://localhost:8000/test/v1/register';
  constructor(public http: HttpClient) {}

  register(registerData: any): Observable<any> {
    return this.http.post<any>(this.baseURL, registerData);
  }

  allusers(endURL: string): Observable<any> {
    const removeEndURL = this.baseURL.replace('register', endURL);
    return this.http.get(removeEndURL);
  }
}
