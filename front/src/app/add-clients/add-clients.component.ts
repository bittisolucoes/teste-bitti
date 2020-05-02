import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {


  clientsForm: FormGroup;
  name = '';
  cpfCnpj = '';
  nascimento = '';
  sexo = ['Masculino', 'Feminino'];
  inscEstadual = '';
  profissao = ['Desenvolvedor', 'CEO', 'Tester'];
  cep = '';
  logradouro = '';
  num = '';
  bairro = '';
  cidade = '';
  estado = ['RS','SC', 'PR'];
  complemento = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clientsForm = this.formBuilder.group({
      name: [null, Validators.required],
      cpfCnpj: [null, Validators.required],
      nascimento: [null, Validators.required],
      sexo: [null, Validators.required],
      inscEstadual: [null, Validators.required],
      profissao: [null, Validators.required],
      cep: [null, Validators.required],
      logradouro: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      complemento: [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addClients(this.clientsForm.value)
      .subscribe((res: any) => {
        const id = res.id;
        this.isLoadingResults = false;
        this.router.navigate(['/clients-details', id]);
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });

  }
}
