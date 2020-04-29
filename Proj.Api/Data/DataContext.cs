using Microsoft.EntityFrameworkCore;
using Proj.Api.Domain;

namespace Proj.Api {
  public class DataContext : DbContext {
    public DataContext (DbContextOptions<DataContext> options) : base (options) { }
    public DbSet<Client> Client { get; set; }
  }
}