using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Proj.Api.Data.Repositories;
using Proj.Api.Domain.Models;
using Proj.Api.Domain.Repositories;

namespace Proj.Api.Repositories
{
    public class ClientRepository : BaseRepository
    {
        public ClientRepository(DataContext context) : base(context)
        { }

        public async Task<IEnumerable<Client>> ListAsync()
        {
            return await _context.Clients.ToListAsync();
        }
        public async Task AddAsync(Client client)
        {
            await _context.Clients.AddAsync(client);
        }

        public async Task<Client> FindByIdAsync(int id)
        {
            return await _context.Clients.FindAsync(id);
        }

        public void Remove (Client client)
        {
            _context.Clients.Remove(client);
        }

        public void Update (Client client)
        {
            _context.Clients.Update(client);
        }
    }
}