import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from '../client/client.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients: Client[];

  constructor(public clientService: ClientsService) {}

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id',
    'name',
    'cpfCnpj',
    'nascimento',
    'sexo',
    'inscEstadual',
    'profissao',
    'cep',
    'logradouro',
    'bairro',
    'cidade',
    'estado',
    'complemento',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.clientService.clients().subscribe((client) => (this.clients = client));

    this.listData = new MatTableDataSource();
    console.log(MatTableDataSource);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    this.listData.filterPredicate = (data, filter) => {
      return this.displayedColumns.some((ele) => {
        return (
          ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1
        );
      });
    };
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
