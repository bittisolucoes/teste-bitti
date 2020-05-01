import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Client } from './client/client.model';
import { api } from '../app.api';

@Injectable()
export class ClientsService {
  constructor(private http: Http) {}

  clients(): Observable<Client[]> {
    return this.http.get(`${api}/client`).map((response) => response.json());
  }
}
