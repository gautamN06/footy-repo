using Backend.Models; 
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Backend.Data; 

public class FootballDbContext : DbContext
{
    public FootballDbContext(DbContextOptions<FootballDbContent> options)
        : base(options)
    {
    }

    public DbSet<Player> Players {get; set; }
}

