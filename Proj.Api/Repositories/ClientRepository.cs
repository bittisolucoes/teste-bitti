using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Proj.Api.Domain;
using Proj.Api;
using Proj.Api.Interfaces;

namespace Proj.Repository.Repository
{
  public class ClientRepository : IClientRepository
  {
    private DataContext context;

    public ClientRepository(DataContext context)
    {
      this.context = context;
    }

    public Client GetByID(int id)
    {
      return context.Client.SingleOrDefault(x => x.id == id);
    }

    public IEnumerable<Client> GetAll()
    {
      return context.Client.ToList().OrderBy(x => x.id);
    }

    public void Create(Client client)
    {
      context.Entry(client).State = EntityState.Added;
      context.SaveChanges();
    }

    public void Update(Client client)
    {
      context.Entry(client).State = EntityState.Modified;
      context.SaveChanges();
    }

    public void Delete(int id)
    {
      context.Client.Remove(this.GetByID(id));
      context.SaveChanges();
    }
  }
}