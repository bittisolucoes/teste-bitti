using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proj.Api.Domain;

namespace Proj.Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]

    public class ClientsController : ControllerBase
    {
        private readonly DataContext _context;

        public ClientsController(DataContext context)
        {
            _context = context;
        }
        //Get tabela Clients junto com a de Address (one to one)
        
        [HttpGet] 
        public async Task<IEnumerable<Client>> ListAsync()
        {
            return await _context.Clients.ToListAsync();
        }
        // PUT: api/Client/5
        [HttpPut("{id}")]   
        public async Task<IActionResult> PutClient(int id, Client client) //, Address address
        {
            if(id!=client.id)
            {
                return BadRequest();
            }
            _context.Entry(client).State = EntityState.Modified;
            //_context.Entry(address).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // GET: api/Client/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            return client;
        }

        // POST: api/Client
        [HttpPost]

        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = client.id }, client);
        }

        // DELETE: api/Client/5
        [HttpDelete("{id}")]

        public async Task<ActionResult<Client>> DeleteClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return client;
        }

        private bool ClientExists(int id)
        {
            return _context.Clients.Any(e => e.id == id);
        }
    }
}

