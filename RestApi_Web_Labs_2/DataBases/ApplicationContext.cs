using Microsoft.EntityFrameworkCore;
using RestApi_Web_Labs_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi_Web_Labs_2.DataBases
{
    public class ApplicationContext : DbContext
    {
        public DbSet<CountryModel> Countries { get; set; }
        public DbSet<PhotographerModel> Photographers { get; set; }
        public DbSet<PhotoModel> Photos { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
