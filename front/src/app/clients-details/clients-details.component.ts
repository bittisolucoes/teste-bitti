import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.scss'],
})
export class ClientsDetailsComponent implements OnInit {
  clients: Clients = {
    id: '',
    name: '',
    cpfCnpj: '',
    nascimento: '',
    sexo: '',
    inscEstadual: '',
    profissao: '',
    cep: '',
    logradouro: '',
    num: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: ''
  };
  isLoadingResults = true;

  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getClientsDetails(this.route.snapshot.params.id);
  }

  getClientsDetails(id: string) {
    this.api.getClientsById(id).subscribe((data: any) => {
      this.clients = data;
      console.log(this.clients);
      this.isLoadingResults = false;
    });
  }
  deleteClients(id: any) {
    this.isLoadingResults = true;
    this.api.deleteClients(id).subscribe(
      (res) => {
        this.isLoadingResults = false;
        this.router.navigate(['/clients']);
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
