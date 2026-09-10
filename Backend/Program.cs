using Backend.Models; 
using Backend.Data; 
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var password = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD");

connectionString += $";Password={password}";

builder.Services.AddDbContext<FootballDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapGet("/players", async (FootballDbContext db) =>
{
    return await db.Players.ToListAsync();
});

app.MapGet("/players/{id}", async (int id, FootballDbContext db) =>
{
    var player = await db.Players.FindAsync(id);

    if (player == null)
    {
        return Results.NotFound();
    }

    return Results.Ok(player);

});

app.MapPost("/players", async (Player player, FootballDbContext db) =>
{
    db.Players.Add(player);
    await db.SaveChangesAsync();

    return Results.Created($"/players/{player.Id}", player);
});


app.MapPut("/players/{id}", async (int id, Player updatedPlayer, FootballDbContext db) =>
{
    var player = await db.Players.FindAsync(id);

    if(player == null)
    {
        return Results.NotFound();
    }

    player.Name = updatedPlayer.Name;
    player.Team = updatedPlayer.Team;

    await db.SaveChangesAsync();

    return Results.Ok(player);

});


app.MapDelete("/players/{id}", async (int id, FootballDbContext db) =>
{
    var player = await db.Players.FindAsync(id);

    if (player == null)
    {
        return Results.NotFound();
    }

    db.Players.Remove(player);
    await db.SaveChangesAsync();

    return Results.NoContent();
    
});

app.Run();