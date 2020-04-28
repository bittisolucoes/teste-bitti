//Form de cadadastrar novos clientes
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientInputService } from '../Shared/client-input.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [],
})
export class ClientInputComponent implements OnInit {
  constructor(private service: ClientInputService) {}

  ngOnInit() {
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
      address: '',
    };
  }
}
