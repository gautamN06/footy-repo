using Backend.Models; 
using Backend.Data; 
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.AddDbContext<FootballDbContext>(options =>
options.UseNpgsql(
    builder.Configuration.GetConnectionString("DefaultConnection")
));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapGet("/players", () =>
{
    return new[]
    {
        new Player
        {
            Id = 1,
            Name = "Bukayo Saka",
            Team = "Arsenal"
        },
        new Player
        {
            Id = 2,
            Name = "Erling Haaland",
            Team = "Manchester City"
        }
    };
});

app.Run();