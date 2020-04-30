import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

import { ClientsService } from '../clients.service';

@Component({
  selector: 'bitti-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  clients: Client[];

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService
      .clients()
      .subscribe((client) => (this.clients = client));
  }
}
