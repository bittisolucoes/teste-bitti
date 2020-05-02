using System.Collections.Generic;
using System.Threading.Tasks;
using Proj.Api.Domain.Models;

namespace Proj.Api.Domain.Services
{
    public interface IClientService
    {
        Task<IEnumerable<Client>> ListAsync();
  }
}