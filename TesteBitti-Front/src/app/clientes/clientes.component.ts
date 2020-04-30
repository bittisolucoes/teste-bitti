import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router, Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Endereco } from '../models/endereco';

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
  cliente: Cliente[];
  clientes: Cliente = new Cliente();
  endereco: Endereco = new Endereco();
  endereco1: Endereco = new Endereco();
  endereco2: Endereco = new Endereco();
  title = 'Cadastro de Clientes';
  start: 0;
  limit: 10;
  textBuscar = '';
  cpfBuscar = '';
  contEndereco=0;

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
    getByIdClientes(id:number){
      this.list2 = [];
      this.clienteService.getByIdCliente(id).subscribe((data: any[])=>{
        this.list2.push(data);
        console.log(this.cliente);
      });
      this.clienteService.getEnderecos().subscribe((data: any[])=>{
        console.log(this.listEnderecos)
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
      if(this.contEndereco >=0){
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

}