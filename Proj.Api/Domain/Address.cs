using System.Collections.Generic;

namespace Proj.Api.Domain
{
  public class Address 
    {
    public int addressId { get; set; }

    public int clientId { get; set; }
    public Client Client {get; set;}

  }
}