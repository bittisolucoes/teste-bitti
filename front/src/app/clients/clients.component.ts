import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'cpfCnpj',
    'nascimento',
    'sexo',
    'inscEstadual',
    'profissao',
    'cep',
    'logradouro',
    'num',
    'bairro',
    'cidade',
    'estado',
    'complemento'
  ];
  data: Clients[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getClients().subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
