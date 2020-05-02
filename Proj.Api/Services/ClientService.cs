using System.Collections.Generic;
using System.Threading.Tasks;
using Proj.Api.Domain.Models;
using Proj.Api.Domain.Services;
using Proj.Api.Domain.Repositories;

namespace Proj.Api.Services
{
    public class ClientService : IClientService
    {

        private readonly IClientRepository _clientRepository;

        public ClientService(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
    }
}
