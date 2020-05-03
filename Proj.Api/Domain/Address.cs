using System.Collections.Generic;

namespace Proj.Api.Domain
{
  public class Address 
    {
    public int addressId { get; set; }
    public string cep { get; set; }
    public string logradouro { get; set; }
    public int num { get; set; }
    public string bairro { get; set; }
    public string cidade { get; set; }
    public string estado { get; set; }
    public string complemento { get; set; }

    public int clientId { get; set; }
    public Client Client {get; set;}

  }
}