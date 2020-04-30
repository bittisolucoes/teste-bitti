import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router, Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Endereco } from '../models/endereco';
import { empty } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  list = [];
  list2 = [];
  listEnderecos = [];
  listEnderecos2 = [];
  nome: string;
  clientes: Cliente = new Cliente();
  endereco: Endereco = new Endereco();
  endereco1: Endereco = new Endereco();
  endereco2: Endereco = new Endereco();
  title = 'Cadastro de Clientes';
  start: 0;
  limit: 10;
  textBuscar = '';
  cpfBuscar = '';
  contEndereco = 0;

  constructor(private http: HttpClient, private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.list = [];
    this.list2 = [];
    this.contEndereco=0;
    this.getAllClientes() 
  }
    getAllClientes(){
      this.clienteService.getClientes().subscribe((data: any[])=>{
            this.list = data;
      });
    }
    getSearchClientes(textBuscar:string){
      console.log(textBuscar)
      if(textBuscar.length > 0){
        this.list= []
        this.clienteService.getClientes().subscribe((data: any[])=>{
          for(let i=0; i < data.length;i++){{
            if(data[i].nome.includes(textBuscar) || data[i].cpfCnpj.includes(textBuscar) || data[i].sexo.includes(textBuscar) || data[i].profissao.includes(textBuscar)){
              this.list.push(data[i])
            }
          }}
        });
      }
      else{
       this.getAllClientes()
      }
    }
    getByIdClientes(id:number){
      this.list2 = [];
      this.clienteService.getByIdCliente(id).subscribe((data: any[])=>{
        this.list2.push(data);
      });
      this.clienteService.getEnderecos().subscribe((data: any[])=>{
      })
    }

    deleteCliente(){
      this.clienteService.deleteCliente(this.list2[0].id).subscribe((data:any [])=>{
        this.deleteCliente();
        window.location.reload();
        this.getAllClientes();
      });;
    }
    addCliente(){
      if(this.contEndereco >0 && this.contEndereco<=1){
        this.clientes.endereco.push(this.endereco)
        this.clientes.endereco.push(this.endereco1);
      }
      if(this.contEndereco >1){
        this.clientes.endereco.push(this.endereco)
        this.clientes.endereco.push(this.endereco1);
        this.clientes.endereco.push(this.endereco2);
      }
      if(this.contEndereco < 1){
        this.clientes.endereco.push(this.endereco);
      }
      this.clienteService.addCliente(this.clientes).subscribe(data=>{
          window.location.reload();
      })
      this.clientes = new Cliente();
      this.contEndereco=0;
      this.endereco = new Endereco();
      this.endereco1 = new Endereco();
      this.endereco2 = new Endereco();
    }
    addEndereco(){
      if(this.contEndereco >= 0){
        console.log(this.endereco)
        if(this.contEndereco <2)
        this.contEndereco=this.contEndereco+1;
      }
    }
    deleteEnderecoList(){
      this.contEndereco = this.contEndereco - 1;
    }
    deleteEndereco(){
      this.clienteService.deleteEndereco(this.list2[0].endereco[0].id).subscribe((data:any [])=>{
        this.clienteService.deleteEndereco(this.list2[0].endereco[1].id).subscribe((data:any [])=>{
          this.clienteService.deleteEndereco(this.list2[0].endereco[2].id).subscribe((data:any [])=>{
          });;
        });;
      });;
    }
    updateCliente(){
      this.clientes = new Cliente();
      this.clientes.id = this.list2[0].id;
      this.clientes.nome = this.list2[0].nome;
      this.clientes.cpfCnpj = this.list2[0].cpfCnpj;
      this.clientes.dataNascimento = this.list2[0].dataNascimento;
      this.clientes.sexo = this.list2[0].sexo;
      this.clientes.inscricaoEstadual = this.list2[0].inscricaoEstadual;
      this.clientes.profissao = this.list2[0].profissao;
      if(this.list2[0].endereco[1] != undefined){
        this.contEndereco++;
      }
      if(this.list2[0].endereco[2] != undefined){
        this.contEndereco++;
      }
      console.log(this.contEndereco)
      if(this.contEndereco == 0){
        this.endereco = new Endereco();
        this.endereco.id = this.list2[0].endereco[0].id;
        this.endereco.cep = this.list2[0].endereco[0].cep;
        this.endereco.logradouro = this.list2[0].endereco[0].logradouro;
        this.endereco.numero = this.list2[0].endereco[0].numero;
        this.endereco.bairro = this.list2[0].endereco[0].bairro;
        this.endereco.cidade = this.list2[0].endereco[0].cidade;
        this.endereco.estado = this.list2[0].endereco[0].estado;
        this.endereco.complemento = this.list2[0].endereco[0].complemento;
        this.clientes.endereco.push(this.endereco);
        console.log(this.endereco)
        this.clienteService.updatecliente(this.clientes).subscribe((data:any [])=>{
          this.clienteService.updateEndereco(this.endereco).subscribe((data:any [])=>{
          window.location.reload();
          });
        });
      }
      if(this.contEndereco > 0 && this.contEndereco <= 1){
        this.endereco = new Endereco();
        this.endereco.id = this.list2[0].endereco[0].id;
        this.endereco.cep = this.list2[0].endereco[0].cep;
        this.endereco.logradouro = this.list2[0].endereco[0].logradouro;
        this.endereco.numero = this.list2[0].endereco[0].numero;
        this.endereco.bairro = this.list2[0].endereco[0].bairro;
        this.endereco.cidade = this.list2[0].endereco[0].cidade;
        this.endereco.estado = this.list2[0].endereco[0].estado;
        this.endereco.complemento = this.list2[0].endereco[0].complemento;
        this.clientes.endereco.push(this.endereco);
        this.endereco1 = new Endereco();
        this.endereco1.id = this.list2[0].endereco[1].id;
        this.endereco1.cep = this.list2[0].endereco[1].cep;
        this.endereco1.logradouro = this.list2[0].endereco[1].logradouro;
        this.endereco1.numero = this.list2[0].endereco[1].numero;
        this.endereco1.bairro = this.list2[0].endereco[1].bairro;
        this.endereco1.cidade = this.list2[0].endereco[1].cidade;
        this.endereco1.estado = this.list2[0].endereco[1].estado;
        this.endereco1.complemento = this.list2[0].endereco[1].complemento;
        this.clientes.endereco.push(this.endereco1);
        this.clienteService.updatecliente(this.clientes).subscribe((data:any [])=>{
          this.clienteService.updateEndereco(this.endereco).subscribe((data: any [])=>{
            this.clienteService.updateEndereco(this.endereco1).subscribe((data: any [])=>{
                window.location.reload();
            });
          });
        });
    }
 }
}