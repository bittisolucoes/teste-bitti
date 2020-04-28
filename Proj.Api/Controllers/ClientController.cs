using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Proj.Api.Domain;
using Proj.Api.Interfaces;

namespace Proj.Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ClientController : ControllerBase
  {
    private IClientRepository repository;

    public ClientController(IClientRepository repository)
    {
      this.repository = repository;
    }

    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<Client>> Get()
    {
      return Ok(new
      {
        status = "200",
        msg = "OK",
        obj = repository.GetAll()
      });
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public ActionResult<Client> Get(int id)
    {
      return Ok(new
      {
        status = "200",
        msg = "OK",
        obj = repository.GetByID(id)
      });
    }

    // POST api/values
    [HttpPost]
    public ActionResult Post([FromBody] Client entity)
    {
      repository.Create(entity);

      return Ok(new
      {
        status = "200",
        msg = "OK",
        obj = entity
      });
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] Client entity)
    {
      repository.Update(entity);

      return Ok(new
      {
        status = "200",
        msg = "OK",
        obj = entity
      });
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
      repository.Delete(id);

      return Ok(new
      {
        status = "200",
        msg = "OK",
        obj = new { }
      });
    }
  }
}
