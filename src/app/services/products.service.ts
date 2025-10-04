import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}
  data: any = [];
  getProducts(): Observable<any[]> {
    // const headers = new HttpHeaders({
    //   token: '1233445678gfgf',
    // });
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.log('error from Service file', err);
        return of([]);
      }),
      map((items) => {
        console.log('item', items);
        for (let i = 0; i < items.length / 2; i++) {
          this.data.push(items[i]);
        }
        return this.data;
      }),
      shareReplay(1)
    );
  }
}
