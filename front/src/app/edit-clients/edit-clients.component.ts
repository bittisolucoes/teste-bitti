import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent implements OnInit {

  clientsForm: FormGroup;
  id = '';
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

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getClientsById(this.route.snapshot.params.id);
    this.clientsForm = this.formBuilder.group({
      id: [''],
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

  getClientsById(id: any) {
    this.api.getClientsById(id).subscribe((data: any) => {
      this.id = data.id;
      this.clientsForm.setValue({
        id: data.id,
        name: data.name,
        cpfCnpj: data.cpfCnpj,
        nascimento: data.nascimento,
        sexo: data.sexo,
        inscEstadual: data.inscEstadual,
        profissao: data.profissao,
        cep: data.cep,
        logradouro: data.logradouro,
        num: data.num,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
        complemento: data.complemento,
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.updateClients(this.id, this.clientsForm.value)
      .subscribe((res: any) => {
          //const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/clients']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  clientsDetails() {
    this.router.navigate(['/clients']);
  }

}
