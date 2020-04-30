using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TesteBitti.Domain;
using TesteBitti.Repositories.Interfaces;

namespace TesteBitti.Repositories
{
    public class EnderecoRepository : IEnderecoRepository
    {
        private DataContext context;

        public EnderecoRepository(DataContext context)
        {
            this.context = context;
        }

        public void Create(Endereco obj)
        {
            obj.cliente = context.Cliente.Find(obj.cliente.Id);
            context.Endereco.Add(obj);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            context.Endereco.Remove(GetById(id));
            context.SaveChanges();
        }

        public List<Endereco> GetAll()
        {
            return context.Endereco.Include(c => c.cliente).ToList();
        }

        public Task<List<Endereco>> GetAllAsync()
        {
            return context.Endereco.Include(c => c.cliente).ToListAsync();
        }

        public Endereco GetById(int id)
        {
            return context.Endereco.SingleOrDefault(x => x.Id == id);
        }

        public Task<Endereco> GetByIdAsync(int id)
        {
            return context.Endereco.SingleOrDefaultAsync(x => x.Id == id);
        }

        public void Update(Endereco obj)
        {
            context.Entry(obj).State = EntityState.Modified;
            context.SaveChanges();
        }
    }
}