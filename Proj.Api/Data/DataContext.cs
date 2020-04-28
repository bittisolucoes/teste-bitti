using Microsoft.EntityFrameworkCore;
using Proj.Api.Domain;
using Proj.Api.Domain.Entities;

namespace Proj.Api
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    public DbSet<Client> Client { get; set; }
    public DbSet<Address> Address { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Client>()
          .HasMany<Address>(c => c.address)
          .WithOne(a => a.client)
          .OnDelete(DeleteBehavior.Cascade);
    }
  }
}