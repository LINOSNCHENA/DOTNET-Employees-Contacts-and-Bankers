using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
 
    [Route("banker/[controller]")]
    [ApiController]
    public class BankersController : ControllerBase
    {
        private readonly ApiDbContext _context;
        public BankersController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Banker>> Get()
        {
            return Ok(_context.Bankers.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Banker> Get(int id)
        {
            var BankerInDb = _context.Bankers.FirstOrDefault(a => a.id == id);
            return Ok(BankerInDb);
        }

        [HttpPost]
        public ActionResult<Banker> Post(Banker Banker)
        {
            _context.Bankers.Add(Banker);
            _context.SaveChanges();
            return Ok(Banker);
        }

        [HttpPut]
        public ActionResult<Banker> Put(Banker Banker)
        {
            var BankerInDb = _context.Bankers.FirstOrDefault(a => a.id == Banker.id);
            BankerInDb.name = Banker.name;
            BankerInDb.email = Banker.email;
            BankerInDb.stars = Banker.stars;
            BankerInDb.mobile = Banker.mobile;
            BankerInDb.office = Banker.office;
            BankerInDb.createdat = Banker.createdat;
            _context.SaveChanges();
            return Ok(Banker);
        }

        [HttpDelete("{id}")]
        public ActionResult<Banker> Delete(int id)
        {
            var BankerInDb = _context.Bankers.FirstOrDefault(a => a.id == id);
            _context.Bankers.Remove(BankerInDb);
            _context.SaveChanges();
            return Ok(BankerInDb);
        }
    }
}
