using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Proj.Api;
using Proj.Api.Domain.Entities;
using Proj.Api.Interfaces;

namespace Proj.Repository.Repository
{
  public class AddressRepository : IAddressRepository
  {
    private DataContext context;

    public AddressRepository(DataContext context)
    {
      this.context = context;
    }

    public Address GetByID(int id)
    {
      return context.Address.SingleOrDefault(x => x.id == id);
    }

    public IEnumerable<Address> GetAll()
    {
      return context.Address.Include(x => x.client).ToList().OrderBy(x => x.id);
    }

    public void Create(Address client)
    {
      context.Entry(client).State = EntityState.Added;
      context.SaveChanges();
    }

    public void Update(Address client)
    {
      context.Entry(client).State = EntityState.Modified;
      context.SaveChanges();
    }

    public void Delete(int id)
    {
      context.Address.Remove(this.GetByID(id));
      context.SaveChanges();
    }

  }
}