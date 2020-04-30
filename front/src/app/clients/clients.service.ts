import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { api } from '../app.api';
import { Client } from './client/client.model';

@Injectable()
export class ClientsService {
  constructor(private http: Http) {}

  client(): Observable<Client[]> {
    return this.http.get(`${api}/clients`).map((response) => response.json());
  }
}
