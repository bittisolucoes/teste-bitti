import { ClienteService } from './../services/cliente.service';
import { Endereco } from './../models/endereco';
import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { Router, Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
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
  clientes: Cliente = new Cliente();
  endereco = new Endereco();
  endereco1 = new Endereco();
  endereco2  = new Endereco();
  enderecoDeletar = new Endereco();
  enderecoDeletar1 = new Endereco();
  enderecoDeletar2 = new Endereco();
  title = 'Cadastro de Clientes';
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
      this.clientes=new Cliente();
      this.endereco=new Endereco();
      this.endereco1=new Endereco();
      this.endereco2=new Endereco();
      this.enderecoDeletar=new Endereco();
      this.enderecoDeletar1=new Endereco();
      this.enderecoDeletar2=new Endereco();
      this.clienteService.getByIdCliente(id).subscribe((data: any[])=>{
        this.list2.push(data);
        this.clientes.id=this.list2[0].id;
        this.clientes.nome=this.list2[0].nome;
        this.clientes.cpfCnpj=this.list2[0].cpfCnpj;
        this.clientes.dataNascimento=this.list2[0].dataNascimento;
        this.clientes.inscricaoEstadual=this.list2[0].inscricaoEstadual;
        this.clientes.profissao=this.list2[0].profissao;
        this.clientes.sexo=this.list2[0].sexo;
        this.dateNascimento=this.datePipe.transform(this.list2[0].dataNascimento,"dd/MM/yyyy")
        this.endereco.id=this.list2[0].endereco[0].id;
        this.endereco.cep=this.list2[0].endereco[0].cep;
        this.endereco.bairro=this.list2[0].endereco[0].bairro;
        this.endereco.cidade=this.list2[0].endereco[0].cidade;
        this.endereco.complemento=this.list2[0].endereco[0].complemento;
        this.endereco.estado=this.list2[0].endereco[0].estado;
        this.endereco.numero=this.list2[0].endereco[0].numero;
        this.endereco.logradouro=this.list2[0].endereco[0].logradouro;
        if(this.list2[0].endereco.length>1 && this.list2[0].endereco.length <=2){
          this.endereco1.id=this.list2[0].endereco[1].id;
          this.endereco1.cep=this.list2[0].endereco[1].cep;
          this.endereco1.bairro=this.list2[0].endereco[1].bairro;
          this.endereco1.cidade=this.list2[0].endereco[1].cidade;
          this.endereco1.complemento=this.list2[0].endereco[1].complemento;
          this.endereco1.estado=this.list2[0].endereco[1].estado;
          this.endereco1.numero=this.list2[0].endereco[1].numero;
          this.endereco1.logradouro=this.list2[0].endereco[1].logradouro;
        }
        if(this.list2[0].endereco.length > 2){
          this.endereco1.id=this.list2[0].endereco[1].id;
          this.endereco1.cep=this.list2[0].endereco[1].cep;
          this.endereco1.bairro=this.list2[0].endereco[1].bairro;
          this.endereco1.cidade=this.list2[0].endereco[1].cidade;
          this.endereco1.complemento=this.list2[0].endereco[1].complemento;
          this.endereco1.estado=this.list2[0].endereco[1].estado;
          this.endereco1.numero=this.list2[0].endereco[1].numero;
          this.endereco1.logradouro=this.list2[0].endereco[1].logradouro;
          this.endereco2.id=this.list2[0].endereco[2].id;
          this.endereco2.cep=this.list2[0].endereco[2].cep;
          this.endereco2.bairro=this.list2[0].endereco[2].bairro;
          this.endereco2.cidade=this.list2[0].endereco[2].cidade;
          this.endereco2.complemento=this.list2[0].endereco[2].complemento;
          this.endereco2.estado=this.list2[0].endereco[2].estado;
          this.endereco2.numero=this.list2[0].endereco[2].numero;
          this.endereco2.logradouro=this.list2[0].endereco[2].logradouro;
        }
      });
    }

    deleteCliente(){
      console.log(this.list2[0].endereco.length)
      if(this.list2[0].endereco.length === 1){
        this.clienteService.deleteEndereco(this.endereco.id).subscribe((data:any [])=>{
          this.clienteService.deleteCliente(this.clientes.id).subscribe((data:any [])=>{
            this.getAllClientes()
          });
        })
      }
      if(this.list2[0].endereco.length === 2){
        this.clienteService.deleteEndereco(this.endereco.id).subscribe((data:any [])=>{
          this.clienteService.deleteEndereco(this.endereco1.id).subscribe((data:any [])=>{
            this.clienteService.deleteCliente(this.clientes.id).subscribe((data:any [])=>{
              this.getAllClientes()
            });
          })
        })
      }
      if(this.list2[0].endereco.length >2){
        this.clienteService.deleteEndereco(this.endereco.id).subscribe((data:any [])=>{
          this.clienteService.deleteEndereco(this.endereco1.id).subscribe((data:any [])=>{
            this.clienteService.deleteEndereco(this.endereco2.id).subscribe((data:any [])=>{
              this.clienteService.deleteCliente(this.clientes.id).subscribe((data:any [])=>{
                this.getAllClientes()
              });
            })
          })
        })
      }
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
         this.getAllClientes()
         this.clientes = new Cliente();
         this.contEndereco=0;
         this.endereco = new Endereco();
         this.endereco1 = new Endereco();
         this.endereco2 = new Endereco();
      })
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
    deleteEnderecoById(id,idCliente){
      this.clienteService.deleteEndereco(id).subscribe((data:any [])=>{
        this.getByIdClientes(idCliente);
      })
    }
    updateCliente(){
      let dateFormat = this.dateNascimento.replace("/","");
      let dateFormat1 = dateFormat.replace("/","");
      let ano=parseInt(dateFormat1.substring(4,8));
      let mes =parseInt(dateFormat1.substring(2,4))-1;
      let dia = parseInt(dateFormat1.substring(0,2));
      this.clientes.dataNascimento = new Date(ano,mes,dia,3,3,3);
      if(this.endereco.cep?.length >1){
        this.clientes.endereco.push(this.endereco);
      }
      if(this.endereco1.cep?.length >1){
        this.clientes.endereco.push(this.endereco1);
      }
      if(this.endereco2.cep?.length >1){
        this.clientes.endereco.push(this.endereco2);
      }
      if(this.enderecoDeletar.cep?.length >1){
        this.clienteService.deleteEndereco(this.enderecoDeletar.id).subscribe((data:any [])=>{
        })
      }
      if(this.enderecoDeletar1.cep?.length >1){
        this.clienteService.deleteEndereco(this.enderecoDeletar1.id).subscribe((data:any [])=>{
        })
      }
      if(this.enderecoDeletar2.cep?.length >1){
        this.clienteService.deleteEndereco(this.enderecoDeletar2.id).subscribe((data:any [])=>{
        })
      }
      console.log(this.clientes)
      this.clienteService.updatecliente(this.clientes).subscribe((data:any [])=>{
        this.getAllClientes();
      })
  }
  deleteEnderecoCliente(id){
    if(id===1){
      this.enderecoDeletar=this.endereco;
      this.endereco=new Endereco()
    }
    if(id===2){
      this.enderecoDeletar1=this.endereco1;
      this.endereco1=new Endereco()
    }
    if(id===3){
      this.enderecoDeletar2=this.endereco2;
      this.endereco2=new Endereco()
    }
  }
  limparCampos(){
    this.list =[];
    this.list2 = [];
    this.clientes=new Cliente();
    this.endereco=new Endereco();
    this.endereco1=new Endereco();
    this.endereco2=new Endereco();
    this.enderecoDeletar=new Endereco();
    this.enderecoDeletar1=new Endereco();
    this.enderecoDeletar2=new Endereco();
    this.getAllClientes()
  }
}