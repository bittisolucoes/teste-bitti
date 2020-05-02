using Microsoft.EntityFrameworkCore;
using Proj.Api.Domain.Models;

namespace Proj.Api {
  public class DataContext : DbContext {
    public DataContext (DbContextOptions<DataContext> options) : base (options) { }
    public DbSet<Client> Clients { get; set; }
    public DbSet<Address> Addresses {get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>()
                .HasMany<Address>(c => c.addresses)
                  .WithOne(a => a.client)
                .OnDelete(DeleteBehavior.Cascade);
    }
  }
}