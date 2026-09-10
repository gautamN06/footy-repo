using Backend.Models; 
using Microsoft.EntityFrameworkCore;


namespace Backend.Data; 

public class FootballDbContext : DbContext
{
    public FootballDbContext(DbContextOptions<FootballDbContext> options)
        : base(options)
    {
    }

    public DbSet<Player> Players {get; set; }
}

