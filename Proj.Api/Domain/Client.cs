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
    public Address Address {get; set; }
    }
}
