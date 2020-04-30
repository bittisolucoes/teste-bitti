import { Component, OnInit } from '@angular/core';
import { Client } from './client-input/client.model';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  clients: Client[];

  constructor(public clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService
      .clients()
      .subscribe((client) => (this.clients = client));
  }
}
