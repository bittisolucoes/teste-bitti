namespace Proj.Api.Domain.Models
{
  public class Address
  {
    public Address() { }

    public Address(int id, string cep, string logradouro, int num, string bairro, string cidade, string estado, string complemento, int clientId, Client client)
    {
      this.id = id;
      this.cep = cep;
      this.logradouro = logradouro;
      this.num = num;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.complemento = complemento;
      this.clientId = clientId;
      this.client = client;

    }
    public int id { get; set; }
    public string cep { get; set; }
    public string logradouro { get; set; }
    public int num { get; set; }
    public string bairro { get; set; }
    public string cidade { get; set; }
    public string estado { get; set; }
    public string complemento { get; set; }
    public int clientId { get; set; }
    public Client client { get; set; }
  }
}