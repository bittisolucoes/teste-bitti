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
  id: '';
  name = '';
  cpfCnpj = '';
  nascimento = '';
  sexo = ['Masculino', 'Feminino'];
  inscEstadual = '';
  profissao = ['Desenvolvedor', 'Tester', 'Gerente de Projetos'];
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
       name:  ['', [Validators.required, Validators.maxLength(100)]],
       cpfCnpj: ['',[Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
       nascimento:  ['',[Validators.required]],
       sexo:  [Validators.required],
       inscEstadual: ['', [Validators.required]],
       profissao: ['', [Validators.required]],
       cep: ['', [Validators.required]],
       logradouro: ['', [Validators.required, Validators.maxLength(100)]],
       num: ['', [Validators.required, Validators.maxLength(10)]],
       bairro: ['', [Validators.required, Validators.maxLength(100)]],
       cidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
       estado: ['', [Validators.required]], //fazer o esquema da máscara RS = Rio grande do sul...
       complemento: ['', [Validators.required, Validators.maxLength(200)]],
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
