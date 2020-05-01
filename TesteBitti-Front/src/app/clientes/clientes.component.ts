import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router, Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Endereco } from '../models/endereco';
import { empty } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  list = [];
  list2 = [];
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
  dateNascimento: string;

  constructor(private http: HttpClient, private router: Router, private clienteService: ClienteService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.endereco=new Endereco();
    this.endereco1=new Endereco();
    this.endereco2=new Endereco();
    this.list = [];
    this.list2 = [];
    this.contEndereco=0;
    this.getAllClientes() 
  }
    getAllClientes(){
      let consult=0;
      this.clienteService.getClientes().subscribe((data: any[])=>{
        this.list=data;
        for(let i=0;i<data.length;i++){
          if(data[i].dataNascimento.includes('0001') || data[i].dataNascimento.includes('1901')){
            this.list[i].dataNascimento='';
          }

        }
      });
    }
    getSearchClientes(textBuscar:string){
      if(textBuscar.length > 0){
        this.list= []
        this.clienteService.getClientes().subscribe((data: any[])=>{
          for(let i=0; i < data.length;i++){{
            if(data[i].nome.toUpperCase().includes(textBuscar.toUpperCase()) || data[i].cpfCnpj.includes(textBuscar) || data[i].profissao.toUpperCase().includes(textBuscar.toUpperCase())){
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
        this.dateNascimento=this.datePipe.transform(this.list2[0].dataNascimento,"dd/MM/yyyy")
      });
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
        if(this.contEndereco < 2)
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
      let dateFormat = this.dateNascimento.replace("/","");
      let dateFormat1 = dateFormat.replace("/","");
      let ano=parseInt(dateFormat1.substring(4,8));
      let mes =parseInt(dateFormat1.substring(2,4))-1;
      let dia = parseInt(dateFormat1.substring(0,2));
      this.clientes = new Cliente();
      this.clientes.id = this.list2[0].id;
      this.clientes.nome = this.list2[0].nome;
      this.clientes.cpfCnpj = this.list2[0].cpfCnpj;
      this.clientes.dataNascimento = new Date(ano,mes,dia,3,3,3);
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
    if(this.contEndereco > 0 && this.contEndereco > 1){
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
      this.endereco2 = new Endereco();
      this.endereco2.id = this.list2[0].endereco[2].id;
      this.endereco2.cep = this.list2[0].endereco[2].cep;
      this.endereco2.logradouro = this.list2[0].endereco[1].logradouro;
      this.endereco2.numero = this.list2[0].endereco[2].numero;
      this.endereco2.bairro = this.list2[0].endereco[2].bairro;
      this.endereco2.cidade = this.list2[0].endereco[2].cidade;
      this.endereco2.estado = this.list2[0].endereco[2].estado;
      this.endereco2.complemento = this.list2[0].endereco[2].complemento;
      this.clientes.endereco.push(this.endereco2);
      this.clienteService.updatecliente(this.clientes).subscribe((data:any [])=>{
        this.clienteService.updateEndereco(this.endereco).subscribe((data: any [])=>{
          this.clienteService.updateEndereco(this.endereco1).subscribe((data: any [])=>{
            this.clienteService.updateEndereco(this.endereco2).subscribe((data: any [])=>{
              window.location.reload();
            });
          });
        });
      });
    }
 }
}