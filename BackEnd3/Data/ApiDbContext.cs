using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class ApiDbContext : DbContext
    {
        public virtual DbSet<ItemData> Items { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Banker> Bankers { get; set; }

        public DbSet<Contact> Contacts { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options)
             : base(options)
        {

        }


    }
}