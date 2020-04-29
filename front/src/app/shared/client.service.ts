import { Client } from './client.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  formData: Client;
  readonly rootURL = 'https://localhost:5001/api/Client';
  list: Client[];

  constructor(private https: HttpClient) {}

  postClient() {
    return this.https.post(this.rootURL + '/Client', this.formData);
  }
  putClient() {
    return this.https.put(
      this.rootURL + '/Client/' + this.formData.id,
      this.formData
    );
  }
  deleteClient(id) {
    return this.https.delete(this.rootURL + '/Client/' + id);
  }

  refreshList() {
    this.https
      .get(this.rootURL + '/Client')
      .toPromise()
      .then((res) => (this.list = res as Client[]));
  }
}
