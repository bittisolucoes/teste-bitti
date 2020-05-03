using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Proj.Api.Domain
{
  public class Client
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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
