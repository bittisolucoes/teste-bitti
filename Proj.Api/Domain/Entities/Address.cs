namespace Proj.Api.Domain.Entities
{
  public class Address
  {
    public Address() { }

    public Address(int id, string cep, string logradouro, int num, string bairro, string cidade, string complemento)
    {
      this.id = id;
      this.cep = cep;
      this.logradouro = logradouro;
      this.num = num;
      this.bairro = bairro;
      this.cidade = cidade;
      this.complemento = complemento;
    }
    public int id { get; set; }
    public string cep { get; set; }
    public string logradouro { get; set; }
    public int num { get; set; }
    public string bairro { get; set; }
    public string cidade { get; set; }
    public string estado { get; set; }
    public string complemento { get; set; }
    public int idclient { get; set; }
    public Client client { get; set; }
  }
}