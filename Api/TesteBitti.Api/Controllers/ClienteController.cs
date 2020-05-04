using TesteBitti.Domain;
using Microsoft.AspNetCore.Mvc;
using System;
using TesteBitti.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace TesteBitti.Api.Controllers
{   
    [Route("api/[Controller]")]
    public class ClienteController : Controller
    {
        private readonly IClienteRepository repository;
        private readonly IEnderecoRepository repositoryEndereco;
        public ClienteController(IClienteRepository repository)
        {
            this.repository = repository;
        }
    
    [HttpGet]
    public async Task<IEnumerable<Cliente>> Get()
    {   
        return await this.repository.GetAllAsync();
    }
    [HttpGet("{id}")]
    public async Task<Cliente> Get(int id)
    {
        return await this.repository.GetByIdAsync(id);
    }
    [HttpPost]
    public IActionResult Post([FromBody]Cliente cliente)
        {
            if (ModelState.IsValid)
            {
                this.repository.Create(cliente);
                return Ok(cliente);
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
     public IActionResult Put([FromBody]Cliente cliente)
     {
        if (ModelState.IsValid)
        {
            this.repository.Update(cliente);
            return Ok(cliente);
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