using System.Collections.Generic;
using System.Threading.Tasks;
using Proj.Api.Domain.Models;

namespace Proj.Api.Domain.Repositories
{
    public interface IClientRepository
    {
        Client GetByID(int id);
        IEnumerable<Client> GetAll();
        void Create(Client client);
        void Update(Client client);
        void Delete(int id);
    }
}