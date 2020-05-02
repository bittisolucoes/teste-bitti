using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proj.Api.Domain.Models;
using Proj.Api.Domain.Services;

namespace Proj.Api.Controllers
{
  [Route("api/[controller]")]
  public class ClientsController : Controller
  {
    private readonly IClientService _clientService;
    public ClientsController(IClientService clientService)
    {
       _clientService = clientService;
    }

    [HttpGet]
    public async Task<IEnumerable<Client>> GetAllAsync()
    {
      var clients = await _clientService.ListAsync();
      return clients;
    }
  }
}
  