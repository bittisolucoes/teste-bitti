using System;
using System.Collections.Generic;

namespace Proj.Api.Domain.Models
{
  public class Client
  {
    public Client() {}
    public Client(int id, string name, string cpfCnpj, string nascimento, string sexo, string inscEstadual, string profissao, List<Address> addresses)
    {
      this.id = id;
      this.name = name;
      this.cpfCnpj = cpfCnpj;
      this.nascimento = nascimento;
      this.sexo = sexo;
      this.inscEstadual = inscEstadual;
      this.profissao = profissao;
      this.addresses = addresses;

    }
    public int id { get; set; }
    public string name { get; set; }
    public string cpfCnpj { get; set; }
    public string nascimento { get; set; }
    public string sexo { get; set; }
    public string inscEstadual { get; set; }
    public string profissao { get; set; }
    public IList<Address> addresses { get; set; } 
  }
}