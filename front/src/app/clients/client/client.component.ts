import { ClientService } from '../../shared/client.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  constructor(public service: ClientService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      id: 0,
      name: '',
      cpfCnpj: '',
      nascimento: '',
      sexo: '',
      inscEstadual: '',
      profissao: '',
      cep: '',
      logradouro: '',
      num: 1,
      bairro: '',
      cidade: '',
      estado: '',
      complemento: '',
    };
  }
}
