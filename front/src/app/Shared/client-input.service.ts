import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ClientInput } from './client-input.model';

@Injectable({
  providedIn: 'root',
})
export class ClientInputService {
  formData: ClientInput;
  readonly rootURL = 'http://localhost:5000/api';
  list: ClientInput[];

  constructor(private http: HttpClient) {}

  postClientInput() {
    return this.http.post(this.rootURL + '/ClientInput', this.formData);
  }
  putClientInput() {
    return this.http.put(
      this.rootURL + '/ClientInput/' + this.formData.id,
      this.formData
    );
  }
  deleteClientInput(id) {
    return this.http.delete(this.rootURL + '/ClientInput/' + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + '/ClientInput')
      .toPromise()
      .then((res) => (this.list = res as ClientInput[]));
  }
}
