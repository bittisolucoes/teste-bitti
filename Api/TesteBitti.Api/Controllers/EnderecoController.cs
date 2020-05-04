using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TesteBitti.Domain;
using TesteBitti.Repositories.Interfaces;

namespace TesteBitti.Api.Controllers
{
    
    [Route("api/[controller]")]
    public class EnderecoController : Controller
    {
        private readonly IEnderecoRepository repository;

        public EnderecoController(IEnderecoRepository repository){
            this.repository = repository;
        }
        [HttpGet]
        public async Task<IEnumerable<Endereco>> Get()
        {
            return await this.repository.GetAllAsync();
        }
        [HttpGet("{id}")]
        public async Task<Endereco> Get(int id)
        {
            return await this.repository.GetByIdAsync(id);
        }
          [HttpPost]
        public IActionResult Post([FromBody]Endereco endereco)
        {
            if (ModelState.IsValid)
            {
                this.repository.Create(endereco);
                return Ok(endereco);
            }
            else
            {
                var errors = new List<string>();
                foreach (var state in ModelState)
                {
                    foreach (var error in state.Value.Errors)
                    {
                        errors.Add(error.ErrorMessage);
                    }
                }

                return BadRequest(new
                {
                    message = errors
                });
            }
        }
        [HttpPut]
        public IActionResult Put([FromBody]Endereco endereco)
        {
            if (ModelState.IsValid)
            {
                this.repository.Update(endereco);
                return Ok(endereco);
            }
            else
            {
                var errors = new List<string>();
                foreach (var state in ModelState)
                {
                    foreach (var error in state.Value.Errors)
                    {
                        errors.Add(error.ErrorMessage);
                    }
                }

                return BadRequest(new
                {
                    message = errors
                });
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            this.repository.Delete(id);
            return Ok(new
            {
                message = "Deletado com sucesso!"
            });
        }
    }
}