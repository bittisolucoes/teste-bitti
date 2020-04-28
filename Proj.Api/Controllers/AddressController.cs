using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Proj.Api.Domain.Entities;
using Proj.Api.Interfaces;

namespace Proj.Api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AddressController : ControllerBase
  {
    private IAddressRepository repository;
    private IClientRepository iclientRepository;

    public AddressController(IAddressRepository repository, IClientRepository iclientRepository)
    {
      this.repository = repository;
      this.iclientRepository = iclientRepository;
    }

    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<Address>> Get()
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
    public ActionResult<Address> Get(int id)
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
    public ActionResult Post([FromBody] Address entity)
    {
      var client = iclientRepository.GetByID(entity.idclient);

      if (client != null)
        entity.client = client;

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
    public ActionResult Put(int id, [FromBody] Address entity)
    {
      var client = iclientRepository.GetByID(entity.idclient);

      if (client != null)
        entity.client = client;

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
