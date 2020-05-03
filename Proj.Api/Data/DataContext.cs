using Microsoft.EntityFrameworkCore;
using Proj.Api.Domain;

namespace Proj.Api {
  public class DataContext : DbContext {
    public DataContext (DbContextOptions<DataContext> options) : base (options) { }
    public DbSet<Client> Clients { get; set; }

    //relação one to one de client com tabela address
    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    // modelBuilder.Entity<Client>()
    //     .HasOne(c => c.Address)
    //     .WithOne(a => a.Client)
    //     .HasForeignKey<Address>(a => a.clientId);
    // }
  
  }

}
