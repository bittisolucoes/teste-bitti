using System.Collections.Generic;

namespace Proj.Api.Domain
{
  public class Client
  {
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
