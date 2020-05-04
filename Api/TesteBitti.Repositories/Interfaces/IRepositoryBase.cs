using System.Collections.Generic;
using System.Threading.Tasks;

namespace TesteBitti.Repositories.Interfaces
{
    public interface IRepositoryBase<Entity>
        where Entity : class
    {
        void Create(Entity obj);
        Entity GetById(int id);
        List<Entity> GetAll();
        void Update(Entity obj);
        void Delete(int id);
        Task<List<Entity>> GetAllAsync();
        Task<Entity> GetByIdAsync(int id);
    }
}