using TesteBitti.Domain;
using Microsoft.EntityFrameworkCore;
namespace TesteBitti.Repositories
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {}
        public DbSet<Cliente> Cliente {get;set;}
        public DbSet<Endereco> Endereco {get;set;}
    }
}