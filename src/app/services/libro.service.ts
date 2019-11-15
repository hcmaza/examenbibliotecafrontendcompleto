import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  
  constructor(private httpClient: HttpClient) { }
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getLibros(): Observable<Libro[]> {
    return this.httpClient.get<Libro[]>('http://localhost:8080/libros').
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  getLibro(id: number): Observable<Libro> {
    return this.httpClient.get<Libro>('http://localhost:8080/libros/' + id).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  postLibro(l: Libro): Observable<Libro> {
    return this.httpClient.post<Libro>('http://localhost:8080/libros', l).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  putLibro(l: Libro): Observable<Libro> {
    return this.httpClient.put<Libro>('http://localhost:8080/libros/' + l.id, l, this.httpOptions).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }

  deleteLibro(id: number): Observable<Libro> {
    return this.httpClient.delete<Libro>('http://localhost:8080/libros/' + id).
    pipe(
      retry(1),
      catchError(this.errorHandl));
  }



  // Error handling
  errorHandl( error ) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

