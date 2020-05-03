import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Clients } from './clients';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const apiUrl = 'https://localhost:5001/api/Clients';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //GET
  getClients(): Observable<Clients[]> {
    return this.http.get<Clients[]>(`${apiUrl}`)
    .pipe(
      tap(clients => console.log('clients')),
      catchError(this.handleError('getClients', []))
    );
  }
  //GET BY ID
  getClientsById(id: string): Observable<Clients> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Clients>(url).pipe(
      tap(_ => console.log(`clients by id id=${id}`)),
      catchError(this.handleError<Clients>(`getClientsById id=${id}`))
    );
  }
  // POST
  addClients(clients: Clients): Observable<Clients> {
    return this.http.post<Clients>(apiUrl, clients, httpOptions).pipe(
      tap((c: Clients) => console.log(`added clients w/ id=${c}`)),
      catchError(this.handleError<Clients>('addClients'))
    );
  }

  updateClients(id: string, clients: Clients): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, clients, httpOptions).pipe(
      tap((_) => console.log(`updated clients id=${id}`)),
      catchError(this.handleError<any>('updateClients'))
    );
  }

  deleteClients(id: string): Observable<Clients> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Clients>(url, httpOptions).pipe(
      tap((_) => console.log(`deleted clients id=${id}`)),
      catchError(this.handleError<Clients>('deleteClients'))
    );
  }
}
