import { Product } from './product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrlApi: string = "http://localhost:5000/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  async showMessage(msg: string, isError: boolean = false): Promise<void> {

    await this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!!!', true)
    return EMPTY;
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrlApi, product).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }

  read(): Observable<[Product[]]> {
    return this.http.get<[Product[]]>(this.baseUrlApi).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }

  readById(id: string): Observable<Product[]> {
    console.log(id);
    const url = `${this.baseUrlApi}/${id}`
    return this.http.get<Product[]>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrlApi}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }

  delete(id: string): Observable<any>{
    const url = `${this.baseUrlApi}/${id}`;
    return this.http.delete<any>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    );
  }
}
