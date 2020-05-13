using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TesteBitti.Domain;
using TesteBitti.Repositories.Interfaces;
namespace TesteBitti.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private DataContext context;
        public ClienteRepository(DataContext context)
        {
            this.context = context;
        }

        public void Create(Cliente obj)
        {
            context.Entry(obj).State = EntityState.Added;
            foreach(var item in obj.endereco) {
                context.Entry(item).State = EntityState.Added;
            }
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            context.Cliente.Remove(GetById(id));
            context.SaveChanges();
        }

        public List<Cliente> GetAll()
        {
            return context.Cliente.Include(e => e.endereco).ToList();
        }

        public Task<List<Cliente>> GetAllAsync()
        {
             return context.Cliente.Include(e => e.endereco).ToListAsync();
        }

        public Cliente GetById(int id)
        {
            return context.Cliente.Include(e => e.endereco).SingleOrDefault(x => x.Id == id);
        }

        public Task<Cliente> GetByIdAsync(int id)
        {
           return context.Cliente.Include(e => e.endereco).SingleOrDefaultAsync(x => x.Id == id);
        }

        public void Update(Cliente obj)
        {
            context.Entry(obj).State = EntityState.Modified;
             foreach(var item in obj.endereco) {
                context.Entry(item).State = EntityState.Modified;
            }
            context.SaveChanges();
        }
    }
}