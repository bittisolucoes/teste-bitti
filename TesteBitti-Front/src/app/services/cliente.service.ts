import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {Cliente} from "../../app/models/cliente";
import {Endereco} from "../../app/models/endereco";
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  constructor(private http: HttpClient) {
  }

  getClientes() : Observable<any> {
    return this.http.get('http://localhost:5000/api/cliente/');
  }
  deleteCliente(id:number){
    return this.http.delete('http://localhost:5000/api/cliente/'+id);
  }
  addCliente(cliente: Cliente) : Observable<any>{
   return this.http.post('http://localhost:5000/api/cliente/',cliente);
  }
  getByIdCliente(id:number){
    return this.http.get('http://localhost:5000/api/cliente/'+id);
  }
  getEnderecos(){
    return this.http.get('http://localhost:5000/api/endereco/');
  }
  deleteEndereco(id:number){
    return this.http.delete('http://localhost:5000/api/endereco/'+id);
  }

}
