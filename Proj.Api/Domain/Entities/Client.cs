using System;
using System.Collections.Generic;

namespace Proj.Api.Domain {
  public class Client {

    public Client () { }
    public Client (int id, string name, string cpfCnpj, string nascimento, string sexo, string inscEstadual, string profissao, string cep, string logradouro, int num, string bairro, string cidade, string estado, string complemento) {
      this.id = id;
      this.name = name;
      this.cpfCnpj = cpfCnpj;
      this.nascimento = nascimento;
      this.sexo = sexo;
      this.inscEstadual = inscEstadual;
      this.profissao = profissao;
      this.cep = cep;
      this.logradouro = logradouro;
      this.num = num;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.complemento = complemento;

    }
    public int id { get; set; }
    public string name { get; set; }
    public string cpfCnpj { get; set; }
    public string nascimento { get; set; }
    public string sexo { get; set; }
    public string inscEstadual { get; set; }
    public string profissao { get; set; }
    public string cep { get; set; }
    public string logradouro { get; set; }
    public int num { get; set; }
    public string bairro { get; set; }
    public string cidade { get; set; }
    public string estado { get; set; }
    public string complemento { get; set; }
  }
}