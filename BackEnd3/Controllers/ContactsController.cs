using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
 
    [Route("contact/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly ApiDbContext _context;
        public ContactsController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Contact>> Get()
        {
            return Ok(_context.Contacts.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Contact> Get(int id)
        {
            var ContactInDb = _context.Contacts.FirstOrDefault(a => a.id == id);
            return Ok(ContactInDb);
        }

        [HttpPost]
        public ActionResult<Contact> Post(Contact Contact)
        {
            _context.Contacts.Add(Contact);
            _context.SaveChanges();
            return Ok(Contact);
        }

        [HttpPut]
        public ActionResult<Contact> Put(Contact Contact)
        {
            var ContactInDb = _context.Contacts.FirstOrDefault(a => a.id == Contact.id);
            ContactInDb.name = Contact.name;
            ContactInDb.email = Contact.email;
            ContactInDb.stars = Contact.stars;        
            ContactInDb.phone = Contact.phone;
            ContactInDb.createdat = Contact.createdat;
            _context.SaveChanges();
            return Ok(Contact);
        }

        [HttpDelete("{id}")]
        public ActionResult<Contact> Delete(int id)
        {
            var ContactInDb = _context.Contacts.FirstOrDefault(a => a.id == id);
            _context.Contacts.Remove(ContactInDb);
            _context.SaveChanges();
            return Ok(ContactInDb);
        }
    }
}
